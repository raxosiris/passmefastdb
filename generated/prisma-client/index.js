"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Agent",
    embedded: false
  },
  {
    name: "Instructor",
    embedded: false
  },
  {
    name: "Student",
    embedded: false
  },
  {
    name: "Booking",
    embedded: false
  },
  {
    name: "DebtStatus",
    embedded: false
  },
  {
    name: "Debt",
    embedded: false
  },
  {
    name: "DebtChase",
    embedded: false
  },
  {
    name: "Payment",
    embedded: false
  },
  {
    name: "PracticalTestStatus",
    embedded: false
  },
  {
    name: "PracticalTest",
    embedded: false
  },
  {
    name: "FastTrackTest",
    embedded: false
  },
  {
    name: "LatestHistoryId",
    embedded: false
  },
  {
    name: "TestCentre",
    embedded: false
  },
  {
    name: "Proxy",
    embedded: false
  },
  {
    name: "UNAVAILABLETYPE",
    embedded: false
  },
  {
    name: "UnavailabilityWindow",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `http://dashboard.passmefast.co.uk:4466`
});
exports.prisma = new exports.Prisma();
