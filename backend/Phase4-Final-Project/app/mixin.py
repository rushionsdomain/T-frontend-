class SerializerMixin:
    """A mixin that provides automatic serialization for SQLAlchemy models."""

    def serialize(self):
        """Return object data in JSON serializable format."""
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}

    @staticmethod
    def serialize_list(lst):
        """Serialize a list of SQLAlchemy models."""
        return [item.serialize() for item in lst]
