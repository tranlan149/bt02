class Person{
    private id:number;
    private name: string;
    private email:string;
    private phone:string;

    constructor(id:number, name:string, email:string, phone:string){
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
    get getDetails(){
        return this.id, this.name, this.email, this.phone;
    }
    get getId(){
        return this.id;
    }
}
class Room{
    protected roomId:number;
    protected type:string;
    protected pricePerNight:number;
    protected isAvailable:boolean;

    constructor(roomId:number, type:string, isAvailable:boolean, pricePerNight:number ){
        this.roomId = roomId;
        this.type = type;
        this.isAvailable = isAvailable;
        this.pricePerNight = pricePerNight;
    }
    get getId(){
        return this.roomId;
    }
    get getisAvailable(){
        return this.isAvailable;
    }
    bookRoom(){
        this.isAvailable = false;
    }
    releaseRoom(){
        this.isAvailable = true;
    }
    calculateCost(nights: number): number{
        return this.pricePerNight*nights;
    }
    getAdditionalServices(){

    }
    applyDiscount(discountRate: number): number{
        return (100-discountRate)/100*this.pricePerNight;
    }
    getCancellationPolicy(){

    }
}
class StandarRoom{

}
class DeluxRoom{

}
class SuiteRoom{

}
class Booking{
    private bookingId:number;
    private custormer:Person;
    private room:Room;
    private nights: number;
    private totalCost: number;

    constructor(bookingId:number, custormer:Person, room:Room, nights:number, totalCost:number){
        this.bookingId = bookingId;
        this.custormer = custormer;
        this.nights = nights;
        this.totalCost = totalCost;
        this.room = room;
    }
    get getDetail(){
        return this.bookingId, this.custormer, this.nights, this.room, this.totalCost;
    }

}
class HotelManager{
    private room:Room[];
    private bookings:Booking[];
    private customers:Person[];

    constructor(room:Room[], bookings:Booking[], custormers:Person[]){
        this.room = [];
        this.bookings = [];
        this.customers = [];
    }
    addRoom(type:string, pricePerNight: number):void{
        let id = Math.random();
        const isAvailable = true;
        let room1 = new Room(id,type,isAvailable,pricePerNight);
        this.room.push(room1);

    }
    addCustomer(name: string, email: string, phone: string): void{
        let id = Math.random()
        let person1 = new Person(id, name, email, phone);
        this.customers.push(person1);
    }
    bookRoom(customerId: number, roomId: number, nights: number): void{
        let id = Math.random();
        const custormer = this.customers.find(item=>item.getId === customerId);
        const room = this.room.find(item=>item.getId === roomId);
        const total= this.room.find(item=>item.getId === roomId)?.calculateCost(nights);
        
        let booking1 = new Booking(id, custormer, room, nights, total );
        this.bookings.push(booking1);
        

    }
    releaseRoom(roomId: number):void{
        for(let i:number=0; i<this.room.length; i++){
            if(this.room[i].getId === roomId){
                this.room[i].releaseRoom();
            }
        }

    }
    listAvailableRooms(): void{
        const room1 = this.room.filter(item=>item.getisAvailable===true);
        console.log(room1);
    }
    calculateTotalRevenue(): number{
        let initatal = 0;
        const total = this.room.reduce(())
    }
}