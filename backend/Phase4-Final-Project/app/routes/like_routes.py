from flask import Blueprint, jsonify
from app import db
from app.models.like import Like
from app.models.post import Post
from flask_jwt_extended import jwt_required, get_jwt_identity

like_routes = Blueprint('like_routes', __name__)

# Like a post (JWT Protected)
@like_routes.route('/posts/<int:post_id>/like', methods=['POST'])
@jwt_required()
def like_post(post_id):
    user_id = get_jwt_identity()
    post = Post.query.get_or_404(post_id)

    like = Like.query.filter_by(user_id=user_id, post_id=post_id).first()
    if like:
        return jsonify({'message': 'Post already liked'}), 400

    new_like = Like(user_id=user_id, post_id=post_id)
    db.session.add(new_like)
    db.session.commit()

    return jsonify({'message': 'Post liked successfully'}), 201

# Unlike a post (JWT Protected)
@like_routes.route('/posts/<int:post_id>/unlike', methods=['DELETE'])
@jwt_required()
def unlike_post(post_id):
    user_id = get_jwt_identity()
    post = Post.query.get_or_404(post_id)

    like = Like.query.filter_by(user_id=user_id, post_id=post_id).first()
    if not like:
        return jsonify({'message': 'You have not liked this post'}), 400

    db.session.delete(like)
    db.session.commit()

    return jsonify({'message': 'Post unliked successfully'})

# Get all likes for a specific post
@like_routes.route('/posts/<int:post_id>/likes', methods=['GET'])
def get_likes(post_id):
    likes = Like.query.filter_by(post_id=post_id).all()
    users_who_liked = [{'user_id': like.user.id, 'username': like.user.username} for like in likes]
    return jsonify(users_who_liked)
