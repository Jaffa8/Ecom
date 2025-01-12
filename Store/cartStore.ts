import { create } from 'zustand'

export const useCart = create((set) => ({
  items: [],
  addProduct: (product: any) =>
    set((state: any) => {
      const existingProductIndex = state.items.findIndex(
        (item: any) => item.product.id === product.id
      );

      if (existingProductIndex !== -1) {
        // Product already exists, increase the quantity
        const updatedItems = state.items.map((item: any, index: number) =>
          index === existingProductIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return { items: updatedItems };
      } else {
        // Product does not exist, add new product with quantity 1
        return { items: [...state.items, { product, quantity: 1 }] };
      }
    }),
    resetCart: () => set({items:[]})
}));