from flask import Blueprint, jsonify
from app import db
from app.models.follow import Follow
from app.models.user import User
from flask_jwt_extended import jwt_required, get_jwt_identity

follow_routes = Blueprint('follow_routes', __name__)

# Follow a user (JWT Protected)
@follow_routes.route('/users/<int:user_id>/follow', methods=['POST'])
@jwt_required()
def follow_user(user_id):
    follower_id = get_jwt_identity()
    user_to_follow = User.query.get_or_404(user_id)

    follow = Follow.query.filter_by(follower_id=follower_id, following_id=user_id).first()
    if follow:
        return jsonify({'message': 'Already following this user'}), 400

    new_follow = Follow(follower_id=follower_id, following_id=user_id)
    db.session.add(new_follow)
    db.session.commit()

    return jsonify({'message': f'You are now following {user_to_follow.username}'}), 201

# Unfollow a user (JWT Protected)
@follow_routes.route('/users/<int:user_id>/unfollow', methods=['DELETE'])
@jwt_required()
def unfollow_user(user_id):
    follower_id = get_jwt_identity()
    follow = Follow.query.filter_by(follower_id=follower_id, following_id=user_id).first()

    if not follow:
        return jsonify({'message': 'You are not following this user'}), 400

    db.session.delete(follow)
    db.session.commit()

    return jsonify({'message': 'Unfollowed successfully'})

# Get all users that a specific user is following
@follow_routes.route('/users/<int:user_id>/following', methods=['GET'])
def get_following(user_id):
    follows = Follow.query.filter_by(follower_id=user_id).all()
    following = [{'id': f.following.id, 'username': f.following.username} for f in follows]
    return jsonify(following)

# Get all followers of a specific user
@follow_routes.route('/users/<int:user_id>/followers', methods=['GET'])
def get_followers(user_id):
    follows = Follow.query.filter_by(following_id=user_id).all()
    followers = [{'id': f.follower.id, 'username': f.follower.username} for f in follows]
    return jsonify(followers)
