export default {
    async GetNotifications(){
        console.warn("REAL NOTIFICATION SERVICE! REACLLY CONTACTING APIS!");
        await delay(1000);
        return { count:42 };
    }
}
