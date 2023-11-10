import { Component } from '@angular/core';
import { NgxExtendedPdfViewerService, pdfDefaultOptions } from 'ngx-extended-pdf-viewer';

@Component({
  selector: 'app-bd',
  templateUrl: './bd.component.html',
})
export class BDComponent {
  constructor(private pdfService: NgxExtendedPdfViewerService) {
    pdfDefaultOptions.maxCanvasPixels = 4096 * 4096 * 5;
    }
}
