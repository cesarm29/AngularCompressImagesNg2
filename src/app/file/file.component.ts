//lib generic
import { Component } from '@angular/core';
//lib compress
import { ImageCompressService, ResizeOptions, ImageUtilityService, IImage, SourceImage } from  'ng2-image-compress';
 

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent  {

  title = 'app';
  selectedImage: any;
  processedImages: any = [];
  showTitle: boolean = false;
 
  constructor(private imgCompressService: ImageCompressService) {
 
  }

 

  onChange(fileInput: any) {
    let fileList: FileList;
 
    let images: Array<IImage> = [];
    
    ImageCompressService.filesToCompressedImageSource(fileInput.target.files).then(observableImages => {
      observableImages.subscribe((image) => {
        images.push(image);
      }, (error) => {
        console.log("Error while converting");
      }, () => {
                this.processedImages = images;      
                this.showTitle = true;          
      });
    });
 
    // you can pass the file
    let files = fileInput.target.files;
 
    ImageCompressService.filesArrayToCompressedImageSource(files).then(observableImages => {
      observableImages.subscribe((image) => {
        images.push(image);
      }, (error) => {
        console.log("Error while converting");
      }, () => {
                this.processedImages = images;      
                this.showTitle = true;          
      });
    });
 
 
  }
 
}
