import axios from 'axios';

export const apiCreateOrderPaypal = async (amount) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/orders`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: amount })
    });

    const order = await response.json();

    return order.id;
};

export const apiOnApprovePaypal = async (orderID) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/orders/capture`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({'orderID': orderID})
    });

    const details = await response.json();

    return details
}

export const apiUpdateStock = async (cartItems) => {
    const stockUpdates = cartItems.map(item => ({
        _id: item.product,
        stock: item.stock - item.qty  // Suponiendo que item.stock es el stock actual
    }));

    try {
        const response = await axios.put(`${import.meta.env.VITE_API_URL}/api/products/update_stock/`, stockUpdates);
        return response.data; // O cualquier manipulación de la respuesta que necesites
    } catch (error) {
        console.error('Error updating stock:', error);
        throw error;
    }
};