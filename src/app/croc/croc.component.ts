import { Component } from '@angular/core';
import { NgxExtendedPdfViewerService, pdfDefaultOptions } from 'ngx-extended-pdf-viewer';

@Component({
  selector: 'app-croc',
  templateUrl: './croc.component.html',
})
export class CrocComponent {

  constructor(private pdfService: NgxExtendedPdfViewerService) {
    pdfDefaultOptions.maxCanvasPixels = 4096 * 4096 * 5; // The default value is 4096 * 4096 pixels,
    }
}
