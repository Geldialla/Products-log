import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  categoryElements: Category[] = [
    {
      id: 1,
      name: 'Food',
    },
    {
      id: 2,
      name: 'Drink',
    },
    {
      id: 3,
      name: 'Vegetables',
    },
    {
      id: 4,
      name: 'Deserts',
    },
  ];
  product: Product = {
    barcode: '',
    name: '',
    description: '',
    price: 0,
    categoryId: 0,
  };
  onSubmitHandler() {
    console.log(this.product);
  }
  findCategoryName(categoryId: number) {
    return this.categoryElements.find((x) => x.id == categoryId)?.name;
  }
}
interface Category {
  name: string;
  id: number;
}
interface Product {
  barcode: string;
  name: string;
  description: string;
  price: number;
  categoryId: number;
}