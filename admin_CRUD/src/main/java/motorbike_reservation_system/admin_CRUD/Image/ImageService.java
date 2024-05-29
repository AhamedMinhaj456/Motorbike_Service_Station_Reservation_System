package motorbike_reservation_system.admin_CRUD.Image;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Service
public class ImageService {

    @Autowired
    private ImageRepository imageRepository;

    public Image saveImage(MultipartFile file) throws IOException {
        Image image = new Image();
        image.setName(file.getOriginalFilename());
        image.setContentType(file.getContentType());
        image.setData(file.getBytes());
        return imageRepository.save(image);
    }

    public Optional<Image> getImage(Long id) {
        return imageRepository.findById(id);
    }

    public List<Image> getAllImage() {
        return imageRepository.findAll();
    }

    public void deleteImage(Long id) {
        imageRepository.deleteById(id);
    }
}
