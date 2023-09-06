import { Component } from '@angular/core';

@Component({
    selector: 'products',
    template: `<h2>{{tittle}}</h2>
    
    <div class="product">
    <select class="select1">
        <option>{{products[0]}}</option>
        <option>{{products[1]}}</option>
        <option>{{products[2]}}</option>
        <option>{{products[3]}}</option>
        <option>{{products[4]}}</option>
    </select>

    <select class="select2">
        <option>{{products1[0]}}</option>
        <option>{{products1[1]}}</option>
        <option>{{products1[2]}}</option>
        <option>{{products1[3]}}</option>
        <option>{{products1[4]}}</option>
    </select>
    </div>
    <div class="product1">
    <select class="select3">
        <option>{{products2[0]}}</option>
        <option>{{products2[1]}}</option>
        <option>{{products2[2]}}</option>
        <option>{{products2[3]}}</option>
        <option>{{products2[4]}}</option>
    </select>

    <select class="select4">
        <option>{{products3[0]}}</option>
        <option>{{products3[1]}}</option>
        <option>{{products3[2]}}</option>
        <option>{{products3[3]}}</option>
        <option>{{products3[4]}}</option>
    </select>
    </div>
    `
})
export class ProductComponenets {
    tittle = "Products dropDown"
    products = [
        "NAME: Apple",
        "BARCODE: abc123abc321",
        "DESCRIPTION: Made In Albania",
        "PRICE: 120",
        "CAREGORY: fruit",
    ]
    products1 = [
        "NAME: Orange",
        "BARCODE: abc123abc321",
        "DESCRIPTION: Made In Albania",
        "PRICE: 200",
        "CAREGORY: fruit",
    ]
    products2 = [
        "NAME: Salad",
        "BARCODE: abc123abc321",
        "DESCRIPTION: Made In Albania",
        "PRICE: 150",
        "CAREGORY: vegetables",
    ]
    products3 = [
        "NAME: Onion",
        "BARCODE: abc123abc321",
        "DESCRIPTION: Made In Albania",
        "PRICE: 180",
        "CAREGORY: fruit",
    ]
}

