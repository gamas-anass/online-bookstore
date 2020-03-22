package in.gamas.onlinebookstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import in.gamas.onlinebookstore.entity.Book;

public interface BookRepository extends JpaRepository<Book, Long> {

}
