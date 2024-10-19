from flask import Blueprint
from app import db
from app.models.user import User
from app.models.post import Post
from app.models.comment import Comment
from app.models.like import Like
from app.models.follow import Follow
from werkzeug.security import generate_password_hash
from faker import Faker

# Initialize Faker
fake = Faker()

# Create a blueprint for seed commands
seed_commands = Blueprint('seed', __name__)

@seed_commands.cli.command('seed')
def seed():
    """ Seed the database with Faker-generated data """

    # 1. Clear existing data to avoid duplicates
    User.query.delete()
    Post.query.delete()
    Comment.query.delete()
    Like.query.delete()
    Follow.query.delete()
    db.session.commit()

    # 2. Create sample users using Faker
    users = []
    for _ in range(10):  # Create 10 users
        user = User(
            username=fake.user_name(),
            email=fake.email(),
            password_hash=generate_password_hash("password")  # Set a consistent password for all users
        )
        users.append(user)
        db.session.add(user)

    db.session.commit()

    # 3. Create sample posts for each user
    posts = []
    for user in users:
        for _ in range(3):  # Each user creates 3 posts
            post = Post(
                content=fake.text(max_nb_chars=200),  # Random text as post content
                user=user
            )
            posts.append(post)
            db.session.add(post)

    db.session.commit()

    # 4. Create sample comments
    comments = []
    for post in posts:
        for _ in range(2):  # Each post gets 2 comments from random users
            commenter = fake.random_element(users)
            comment = Comment(
                text=fake.sentence(),  # Random sentence as a comment
                post=post,
                user=commenter
            )
            comments.append(comment)
            db.session.add(comment)

    db.session.commit()

    # 5. Create sample likes
    for post in posts:
        for _ in range(3):  # Each post gets 3 likes from random users
            liker = fake.random_element(users)
            like = Like(
                user=liker,
                post=post
            )
            db.session.add(like)

    db.session.commit()

    # 6. Create follow relationships
    for user in users:
        for _ in range(2):  # Each user follows 2 other random users
            following = fake.random_element([u for u in users if u != user])  # Avoid self-follow
            follow = Follow(
                follower=user,
                following=following
            )
            db.session.add(follow)

    db.session.commit()

    print("Database seeded successfully with Faker-generated data!")
