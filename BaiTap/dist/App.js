"use strict";
class Person {
    constructor(id, name, email, phone) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
    get getDetails() {
        return this.id, this.name, this.email, this.phone;
    }
    get getId() {
        return this.id;
    }
}
class Room {
    constructor(roomId, type, isAvailable, pricePerNight) {
        this.roomId = roomId;
        this.type = type;
        this.isAvailable = isAvailable;
        this.pricePerNight = pricePerNight;
    }
    get getId() {
        return this.roomId;
    }
    bookRoom() {
        this.isAvailable = false;
    }
    releaseRoom() {
        this.isAvailable = true;
    }
    calculateCost(nights) {
        return this.pricePerNight * nights;
    }
    getAdditionalServices() {
    }
    applyDiscount(discountRate) {
        return (100 - discountRate) / 100 * this.pricePerNight;
    }
    getCancellationPolicy() {
    }
}
class StandarRoom {
}
class DeluxRoom {
}
class SuiteRoom {
}
class Booking {
    constructor(bookingId, custormer, room, nights, totalCost) {
        this.bookingId = bookingId;
        this.custormer = custormer;
        this.nights = nights;
        this.totalCost = totalCost;
        this.room = room;
    }
    get getDetail() {
        return this.bookingId, this.custormer, this.nights, this.room, this.totalCost;
    }
}
class HotelManager {
    constructor(room, bookings, custormers) {
        this.room = [];
        this.bookings = [];
        this.customers = [];
    }
    addRoom(type, pricePerNight) {
        let id = Math.random();
        const isAvailable = true;
        let room1 = new Room(id, type, isAvailable, pricePerNight);
        this.room.push(room1);
    }
    addCustomer(name, email, phone) {
        let id = Math.random();
        let person1 = new Person(id, name, email, phone);
        this.customers.push(person1);
    }
    bookRoom(customerId, roomId, nights) {
        var _a;
        let id = Math.random();
        const custormer = this.customers.find(item => item.getId === customerId);
        const room = this.room.find(item => item.getId === roomId);
        const total = (_a = this.room.find(item => item.getId === roomId)) === null || _a === void 0 ? void 0 : _a.calculateCost(nights);
        let booking1 = new Booking(id, custormer, room, nights, total);
        this.bookings.push(booking1);
    }
    releaseRoom(roomId) {
        for (let i = 0; i < this.room.length; i++) {
            if (this.)
                ;
        }
    }
}
