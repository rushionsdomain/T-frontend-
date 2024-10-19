from flask import Blueprint, request, jsonify
from app import db
from app.models.comment import Comment
from flask_jwt_extended import jwt_required, get_jwt_identity

comment_routes = Blueprint('comment_routes', __name__)

# Create a new comment (JWT Protected)
@comment_routes.route('/comments', methods=['POST'])
@jwt_required()
def create_comment():
    data = request.get_json()
    user_id = get_jwt_identity()

    new_comment = Comment(
        text=data['text'],
        post_id=data['post_id'],
        user_id=user_id
    )
    db.session.add(new_comment)
    db.session.commit()

    return jsonify(new_comment.serialize()), 201

# Get all comments for a post
@comment_routes.route('/posts/<int:post_id>/comments', methods=['GET'])
def get_comments(post_id):
    comments = Comment.query.filter_by(post_id=post_id).all()
    return jsonify(Comment.serialize_list(comments))
