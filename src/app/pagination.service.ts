import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PaginationService {
  startPage = 1;
  totalPages!: number;
  itemsPerPage = 5;

  displayItems(
    array: any[],
    wrapper: any,
    currentPage: number,
    currentItems: any[]
  ) {
    this.totalPages = Math.ceil(array.length / 5);
    for (let i = 1; i < this.totalPages; i++) {
      let button = document.createElement('button');
      button.textContent = '5';
      wrapper.appendChild(button);
      button.addEventListener('click', function () {
        currentItems = [...array];

        currentPage = +button.innerText;
        console.log(currentItems, currentPage);
        return currentItems;
      });
    }
    console.log(array, currentPage, currentItems);
    return currentItems;
  }
}
