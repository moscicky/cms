package pl.moscicki.cms

import org.springframework.data.domain.Example
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.data.domain.Sort
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.data.rest.core.annotation.RepositoryRestResource
import org.springframework.data.rest.core.annotation.RestResource
import org.springframework.web.bind.annotation.CrossOrigin
import java.util.*

@RepositoryRestResource(
    path = "contact",
    collectionResourceRel = "contact",
)
@CrossOrigin
interface ContactRepository : MongoRepository<Contact, String> {
    @RestResource(exported = true)
    override fun <S : Contact?> save(entity: S): S

    @RestResource(exported = false)
    override fun <S : Contact?> saveAll(entities: MutableIterable<S>): MutableList<S>

    @RestResource(exported = false)
    override fun findById(id: String): Optional<Contact>

    @RestResource(exported = false)
    override fun existsById(id: String): Boolean

    @RestResource(exported = false)
    override fun findAll(): MutableList<Contact>

    @RestResource(exported = false)
    override fun findAll(sort: Sort): MutableList<Contact>

    @RestResource(exported = false)
    override fun <S : Contact?> findAll(example: Example<S>): MutableList<S>

    @RestResource(exported = false)
    override fun <S : Contact?> findAll(example: Example<S>, sort: Sort): MutableList<S>

    @RestResource(exported = false)
    override fun findAll(pageable: Pageable): Page<Contact>

    @RestResource(exported = false)
    override fun <S : Contact?> findAll(example: Example<S>, pageable: Pageable): Page<S>

    @RestResource(exported = false)
    override fun findAllById(ids: MutableIterable<String>): MutableIterable<Contact>

    @RestResource(exported = false)
    override fun count(): Long

    @RestResource(exported = false)
    override fun <S : Contact?> count(example: Example<S>): Long

    @RestResource(exported = false)
    override fun deleteById(id: String)

    @RestResource(exported = false)
    override fun delete(entity: Contact)

    @RestResource(exported = false)
    override fun deleteAll(entities: MutableIterable<Contact>)

    @RestResource(exported = false)
    override fun deleteAll()

    @RestResource(exported = false)
    override fun <S : Contact?> findOne(example: Example<S>): Optional<S>

    @RestResource(exported = false)
    override fun <S : Contact?> exists(example: Example<S>): Boolean

    @RestResource(exported = false)
    override fun <S : Contact?> insert(entity: S): S

    @RestResource(exported = false)
    override fun <S : Contact?> insert(entities: MutableIterable<S>): MutableList<S>
}