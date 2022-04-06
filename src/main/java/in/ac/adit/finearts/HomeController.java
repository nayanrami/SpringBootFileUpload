package in.ac.adit.finearts;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@Controller
public class HomeController {

	public String UPLOADDIR;

	@RequestMapping("/")
	public String index() {
		return "index";
	}

	@RequestMapping("uploaddata")
	public String uploaddata(@RequestParam MultipartFile file, @RequestParam("enrollmentno") String enrollmentno)
			throws IOException {
		UPLOADDIR = "D:\\Demo";
		Files.copy(file.getInputStream(), Paths.get(UPLOADDIR + File.separator + file.getOriginalFilename()),
				StandardCopyOption.REPLACE_EXISTING);

		System.out.println(enrollmentno);
		
		return "index";
	}
}
