package pl.moscicki.cms

import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.data.rest.core.annotation.RepositoryRestResource
import org.springframework.web.bind.annotation.*

@RepositoryRestResource(
    path = "products",
    collectionResourceRel = "products"
)
@CrossOrigin
interface ProductRepository : MongoRepository<Product, String>

@RestController
@RequestMapping("/shop")
@CrossOrigin("*")
class ShopEndpoint(val productRepository: ProductRepository) {

    @PostMapping("/buy/{id}")
    @CrossOrigin("*")
    fun buy(@PathVariable id: String, @RequestBody buyRequest: BuyRequest): BuyResponse {
        val product = productRepository.findById(id)
        return if (product.isEmpty) {
            BuyResponse("No such product")
        } else {
            val price = buyRequest.quantity * product.get().price
            BuyResponse("You have been charged $price")
        }

    }


}

data class BuyResponse(val message: String)
data class BuyRequest(val quantity: Int, val promoCode: String, val creditCard: String)