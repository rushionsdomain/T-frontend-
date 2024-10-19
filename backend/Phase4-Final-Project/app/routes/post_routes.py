from flask import Blueprint, request, jsonify
from app import db
from app.models.post import Post
from flask_jwt_extended import jwt_required, get_jwt_identity

post_routes = Blueprint('post_routes', __name__)

# Create a new post (JWT Protected)
@post_routes.route('/posts', methods=['POST'])
@jwt_required()
def create_post():
    data = request.get_json()
    user_id = get_jwt_identity()

    new_post = Post(content=data['content'], user_id=user_id)
    db.session.add(new_post)
    db.session.commit()

    return jsonify(new_post.serialize()), 201

# Get all posts
@post_routes.route('/posts', methods=['GET'])
def get_posts():
    posts = Post.query.all()
    return jsonify(Post.serialize_list(posts))

# Get a specific post
@post_routes.route('/posts/<int:post_id>', methods=['GET'])
def get_post(post_id):
    post = Post.query.get_or_404(post_id)
    return jsonify(post.serialize())
