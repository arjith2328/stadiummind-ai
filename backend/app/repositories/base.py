from typing import Generic, TypeVar, Optional, List
from pydantic import BaseModel

ModelType = TypeVar("ModelType", bound=BaseModel)

class BaseRepository(Generic[ModelType]):
    """
    Base Repository Pattern.
    
    Provides an abstraction layer over the database context. All specific entity
    repositories should inherit from this base class to ensure consistency
    and ease of mocking during unit tests.
    """
    
    def __init__(self, db_session=None):
        """
        Initializes the repository with a database session.
        
        Args:
            db_session: The active database session context.
        """
        self.db = db_session

    async def get(self, id: int) -> Optional[ModelType]:
        """
        Retrieves a single entity by its ID.
        
        Args:
            id (int): The unique identifier of the entity.
            
        Returns:
            Optional[ModelType]: The entity if found, else None.
        """
        pass

    async def get_multi(self, skip: int = 0, limit: int = 100) -> List[ModelType]:
        """
        Retrieves multiple entities with pagination.
        
        Args:
            skip (int): The number of records to skip.
            limit (int): The maximum number of records to return.
            
        Returns:
            List[ModelType]: A list of retrieved entities.
        """
        pass
