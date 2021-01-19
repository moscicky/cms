package pl.moscicki.cms

import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.data.rest.core.annotation.RepositoryRestResource

@RepositoryRestResource(
    path = "products",
    collectionResourceRel = "products"
)
interface ProductRepository : MongoRepository<Product, String>