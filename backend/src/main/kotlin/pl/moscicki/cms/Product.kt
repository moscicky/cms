package pl.moscicki.cms

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document

@Document
data class Product(
    @Id val id: String?,
    val name: String,
    val description: String?,
    val imageUrl: String?,
    val price: Float,
    val isMedicine: Boolean
)