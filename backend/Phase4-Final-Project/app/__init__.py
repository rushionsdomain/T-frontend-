from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from flask_migrate import Migrate
from flask_marshmallow import Marshmallow

# Initialize the database and JWT
db = SQLAlchemy()
jwt = JWTManager()
migrate = Migrate()
ma = Marshmallow()

def create_app():
    # Initialize the Flask app
    app = Flask(__name__)

    # Enable Cross-Origin Resource Sharing (CORS) to allow requests from different domains
    CORS(app)

    # Configure the SQLite database
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///socialmedia.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    # Configure secret keys for JWT
    app.config['SECRET_KEY'] = 'your-secret-key'
    app.config['JWT_SECRET_KEY'] = 'your-jwt-secret-key'

    # Initialize the app with the database and JWT
    db.init_app(app)
    jwt.init_app(app)
    migrate.init_app(app, db)
    ma.init_app(app)

    # Import the models to ensure they are registered with SQLAlchemy
    from app.models.user import User
    from app.models.post import Post
    from app.models.comment import Comment
    from app.models.like import Like
    from app.models.follow import Follow

    # Create the database tables (if not already created)
    with app.app_context():
        db.create_all()

    # Register blueprints for routes (API endpoints)
    from app.routes.auth_routes import auth_routes
    from app.routes.post_routes import post_routes
    from app.routes.comment_routes import comment_routes
    from app.routes.like_routes import like_routes
    from app.routes.follow_routes import follow_routes
    from app.commands import seed_commands

    app.register_blueprint(auth_routes)
    app.register_blueprint(post_routes)
    app.register_blueprint(comment_routes)
    app.register_blueprint(like_routes)
    app.register_blueprint(follow_routes)
    app.register_blueprint(seed_commands)

    # Define a simple test route to verify the API is running
    @app.route('/')
    def home():
        return "Welcome to the Social Media API!"

    return app
