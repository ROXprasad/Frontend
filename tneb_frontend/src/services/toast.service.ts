import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Message } from 'primeng/api';
@Injectable({
  providedIn: 'root'
})
export class ToastService {
    private displayedMessages: Set<string> = new Set();
  
    constructor(private messageService: MessageService) {}
  
    showMessage(message: Message) {
      // Check if the message is already displayed
      if (!this.displayedMessages.has(message.detail)) {
        this.displayedMessages.add(message.detail);
        this.messageService.add(message);
  
        // Automatically remove the message after a certain time (optional)
        setTimeout(() => {
          this.messageService.clear(); // Clear the message from the service
          this.displayedMessages.delete(message.detail); // Remove from the set
        }, 3000); // Adjust timeout as needed
      }
    }
}
