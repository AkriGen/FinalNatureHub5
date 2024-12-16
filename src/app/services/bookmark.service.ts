import { Injectable } from '@angular/core';
import { ToastrServiceWrapper } from '../toastr.service';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {

  private bookmarkKey = 'bookmarkedCards';

  constructor(private toastr:ToastrServiceWrapper) { }

  // Get all bookmarked cards from local storage
  getBookmarks(): any[] {
    const bookmarks = localStorage.getItem(this.bookmarkKey);
    return bookmarks ? JSON.parse(bookmarks) : [];
  }

  addBookmark(card: { RemedyId: number, RemedyName: string, Remediesimg: string, Description: string, Benefits: string, PreperationMethod: string, UsageInstructions: string, CategoryId: number, createdBy: string, category: string }): void {
    const bookmarks = this.getBookmarks();
  
    // Check if the bookmark with the same RemedyId already exists
    const bookmarkExists = bookmarks.some(b => b.RemedyId === card.RemedyId);
  
    if (bookmarkExists) {
      // Show alert if the bookmark already exists
      this.toastr.warning('This bookmark has already been added.')

    } else {
      // Add the bookmark if it does not already exist
      bookmarks.push(card);
      localStorage.setItem(this.bookmarkKey, JSON.stringify(bookmarks));
      this.toastr.success('Bookmark added successfully!!')

    }
  }

  // Remove a bookmark from the bookmarks list
  removeBookmark(card: { RemedyId: number, RemedyName: string, Remediesimg: string, Description: string, Benefits: string, PreperationMethod: string, UsageInstructions: string, CategoryId: number, createdBy: string, category: string }): void {
    let bookmarks = this.getBookmarks();
    // Filter the bookmarks array by RemedyId to remove the correct card
    bookmarks = bookmarks.filter(b => b.RemedyId !== card.RemedyId);
    localStorage.setItem(this.bookmarkKey, JSON.stringify(bookmarks));
    this.toastr.success('Bookmark removed successfully!!')

  }
}
