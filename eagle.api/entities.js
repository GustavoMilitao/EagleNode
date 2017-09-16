Customer ={
  ID: { type: String, default: "" },
  Name: { type: String, default: "" },
  Address: { type: String, default: "" },
  State: { type: String, default: "" },
  City: { type: String, default: "" },
  Addresscode: { type: String, default: "" },
  Country: { type: String, default: "" },
  DDI: { type: String, default: "" },
  DDD: { type: String, default: "" },
  Phonenumber: { type: String, default: "" },
  Nickname: { type: String, default: "" },
  Password: { type: String, default: "" },
  Email: { type: String, default: "" },
  PaymentMethods : { type: Array, default : [] },
  RegDate: Date,
}

Distributor ={
  ID: { type: String, default: "" },
  Name: { type: String, default: "" },
  Address: { type: String, default: "" },
  State: { type: String, default: "" },
  City: { type: String, default: "" },
  Addresscode: { type: String, default: "" },
  Country: { type: String, default: "" },
  DDI: { type: String, default: "" },
  DDD: { type: String, default: "" },
  Phonenumber: { type: String, default: "" },
  Nickname: { type: String, default: "" },
  Password: { type: String, default: "" },
  Email: { type: String, default: "" },
  RegDate: Date,
}

Driver = {
  Name: { type: String, default: "" },
  Address: { type: String, default: "" },
  State: { type: String, default: "" },
  City: { type: String, default: "" },
  Addresscode: { type: String, default: "" },
  Country: { type: String, default: "" },
  DDI: { type: String, default: "" },
  DDD: { type: String, default: "" },
  Phonenumber: { type: String, default: "" },
  Nickname: { type: String, default: "" },
  Password: { type: String, default: "" },
  Email: { type: String, default: "" },
  RegDate: Date,
  DriverGain: { 
      ID: { type: String, default: "" },
      NetGainPerKm: Number,
      RegDate: Date,
      Car: { type : String, default : "" }
    
   },
  
  Cars: { type: Array, default: [] },
  // Criar uma coleção para estes arrays e fazer referência do ID aqui.
  BankingAccounts : { type: Array, default: [] }
}

BankingAccount = {
  ID: { type: String, default: "" },
  IDUser: { type: String, default: "" },
  Bankcode: { type: String, default: "" },
  Bankname: { type: String, default: "" },
  Agency: { type: String, default: "" },
  CurrentAccount: { type: String, default: "" },
  Digit: { type: String, default: "" },
  RegDate: Date,
  User: { type: String, default: "" }
}

Car = { 
  CarModel: { 
    ID: { type: String, default: "" },
    ModelName: { type: String, default: "" },
    Brand: { type: String, default: "" },
    Year: { type: String, default: "" },
    Potency: { type: String, default: "" },
    Flex: { type: Boolean, default: false }
   },
  Customa: { 
    ID: { type: String, default: "" },
    CarPiecesCustoma: { type: Array, default: [] },
    TotalCustomaValuePerKm: Number
   },
   ConsumptionCost : {
    ID: { type: String, default: "" },
    GasKmPerLiter: Number,
    GasPrice: Number,
    GasPricePerKm: Number,
    RegDate: Date,
   }
}

CarPieceCustoma ={  
  Name: { type: String, default: "" },
  KmToChange: Number,
  ValueToChange: Number,
}

CreditCard = { 
  NameInCard: { type: String, default: "" },
  CardNumber: { type: String, default: "" },
  ValidTru: Date,
  CVV: { type: String, default: "" },
  RegDate: Date,
}

Freight = { 
  TotalFreightCostPerKm: Number,
  TotalFreight: Number,
  RegDate: Date,
}

Order = {
  ID: { type: String, default: "" },
  IDCustomer: { type: String, default: "" },
  IDDistributor: { type: String, default: "" },
  IDDriver: { type: String, default: "" },
  TotalPrice: Number,
  ProductsList: { type : Array, default : [] },
  Freight : { 
    TotalFreightCostPerKm: Number,
    TotalFreight: Number,
   },
  Payments: { type : Array, default: [] },
}

OrderPayment = { 
  IDPayMethod: { type: String, default: "" },
  IDOrder: { type: String, default: "" },
  Value: Number,
}

PaymentMethod = { 
  PaymentType: { type: String, default: "" },
  Active: { type: String, default: "" },
}

PaymentType = { 
  Description: { type: String, default: "" }
}

Product = { 
  ID: { type: String, default: "" },
  IDUserDistributor: { type: String, default: "" },
  Description: { type: String, default: "" },
  Name: { type: String, default: "" },
  Returnable: { type: String, default: "" },
  SinglePrice: Number,
  Available: { type: String, default: "" },
  RegDate: Date,
  Distributor: { type: String, default: "" }
}

UserType = { 
  ID: { type: String, default: "" },
  Type: { type: String, default: "" }
}

