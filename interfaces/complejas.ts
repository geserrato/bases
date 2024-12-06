(() => {
  interface Client {
    name: string;
    age?: number;
    address?: Address;
    getFullAdress(id: string): void;
  }

  interface Address {
    id: number;
    zip: string;
    city: string;
  }

  const client: Client = {
    name: "Gerardo",
    age: 33,
    address: {
      id: 125,
      zip: "kerr",
      city: "Ottawa",
    },
    getFullAdress(id: string) {},
  };
})();
