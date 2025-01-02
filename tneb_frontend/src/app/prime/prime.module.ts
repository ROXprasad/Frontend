import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { MessageModule } from 'primeng/message';
import { SidebarModule } from 'primeng/sidebar';
import { TableModule } from 'primeng/table';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { AutoCompleteModule } from "primeng/autocomplete";
import { CalendarModule } from "primeng/calendar";
import { ChipsModule } from "primeng/chips";
import { DropdownModule } from "primeng/dropdown";
import { InputMaskModule } from "primeng/inputmask";
import { InputNumberModule } from "primeng/inputnumber";
import { CascadeSelectModule } from "primeng/cascadeselect";
import { MultiSelectModule } from "primeng/multiselect";
import { InputTextareaModule } from "primeng/inputtextarea";
import { ToolbarModule } from 'primeng/toolbar';
import { CheckboxModule } from 'primeng/checkbox';
import {SliderModule} from 'primeng/slider';
import {ContextMenuModule} from 'primeng/contextmenu';
import {ProgressBarModule} from 'primeng/progressbar';
import {RatingModule} from 'primeng/rating';
import {RadioButtonModule} from 'primeng/radiobutton';
import { ConfirmationService } from 'primeng/api';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {SkeletonModule} from 'primeng/skeleton';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ConfirmDialogModule,
    ButtonModule,
    DialogModule,
    MessageModule,
    SidebarModule,
    TableModule,
    FileUploadModule,
    ToastModule,
    CalendarModule,
    ChipsModule,
    DropdownModule,
    InputMaskModule,
    InputNumberModule,
    CascadeSelectModule,
    MultiSelectModule,
    InputTextareaModule,
    InputTextModule,
    AutoCompleteModule,
    ToolbarModule,
    SliderModule,
    ContextMenuModule,
    ProgressBarModule,
    RatingModule,
    RadioButtonModule,
    CheckboxModule,
    OverlayPanelModule,
    SkeletonModule
  ],
  exports: [
    ToastModule,
    FileUploadModule,
    ConfirmDialogModule,
    ButtonModule,
    DialogModule,
    MessageModule,
    SidebarModule,
    TableModule,
    CalendarModule,
    ChipsModule,
    DropdownModule,
    InputMaskModule,
    InputNumberModule,
    CascadeSelectModule,
    MultiSelectModule,
    InputTextareaModule,
    InputTextModule,
    AutoCompleteModule,
    ToolbarModule,
    SliderModule,
    ContextMenuModule,
    ProgressBarModule,
    RatingModule,
    RadioButtonModule,
    CheckboxModule,
    OverlayPanelModule,
    SkeletonModule
  ],

  providers: [MessageService,ConfirmationService],
})
export class PrimeModule {}
