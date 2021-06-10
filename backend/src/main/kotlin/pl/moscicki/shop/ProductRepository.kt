package pl.moscicki.shop

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
class ShopEndpoint(val productRepository: ProductRepository, val promoCodeRepository: PromoCodeRepository) {

    @PostMapping("/buy/{id}")
    @CrossOrigin("*")
    fun buy(@PathVariable id: String, @RequestBody buyRequest: BuyRequest): BuyResponse {
        val product = productRepository.findById(id)

        return if (product.isEmpty) {
            BuyResponse("No such product")
        } else {
            if (!buyRequest.creditCard.matches("((\\d){4}-){3}(\\d){4}".toRegex())) {
                return BuyResponse("Niepoprawny numer karty")
            }

            val promo = promoCodeRepository.findAll().firstOrNull { it.code == buyRequest.promoCode }
            val discount = promo?.discount ?: 0

            val price = buyRequest.quantity * product.get().price
            val priceAfterDiscount = price - price * discount/100
            BuyResponse("Pobrano z akrty: $priceAfterDiscount. Zniżka: $discount %")
        }

    }


}

data class BuyResponse(val message: String)
data class BuyRequest(val quantity: Int, val promoCode: String, val creditCard: String)