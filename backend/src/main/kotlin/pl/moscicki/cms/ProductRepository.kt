package pl.moscicki.cms

import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.data.rest.core.annotation.RepositoryRestResource
import org.springframework.web.bind.annotation.CrossOrigin

@RepositoryRestResource(
    path = "products",
    collectionResourceRel = "products"
)
@CrossOrigin
interface ProductRepository : MongoRepository<Product, String>