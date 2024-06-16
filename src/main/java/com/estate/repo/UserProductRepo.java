package com.estate.repo;

import com.estate.entity.ProductEntity;
import com.estate.entity.UserProduct;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserProductRepo extends CrudRepository<UserProduct,Long> {
    void deleteByProduct(ProductEntity product);
}