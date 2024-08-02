import { Order, OrderDetailItem, OrderSheet } from "../models/order.model";
import { httpClient, requestHandler } from "./http";

export const order = async (orderData: OrderSheet) => {
    return await requestHandler("post", "/orders", orderData);
};

export const fetchOrders = async () => {
    return await requestHandler("get", "/orders");
};

export const fetchOrder = async (orderId: number) => {
    return requestHandler("get", `/orders/${orderId}`);
};