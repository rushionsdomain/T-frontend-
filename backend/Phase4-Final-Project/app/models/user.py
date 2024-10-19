from app import db
from app.mixin import SerializerMixin

class User(db.Model, SerializerMixin):
    __tablename__ = 'user'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(30), nullable=False, unique=True)
    email = db.Column(db.String(100), nullable=False, unique=True)
    password_hash = db.Column(db.String(128), nullable=False)

    posts = db.relationship('Post', backref='user', lazy=True)
    comments = db.relationship('Comment', backref='user', lazy=True)
    likes = db.relationship('Like', backref='user', lazy=True)
    followers = db.relationship('Follow', foreign_keys='Follow.follower_id', backref='follower', lazy=True)
    following = db.relationship('Follow', foreign_keys='Follow.following_id', backref='following', lazy=True)

    def __repr__(self):
        return f'<User {self.username}>'


