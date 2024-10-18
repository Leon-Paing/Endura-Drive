import React from "react";

const data = [
    {
        id:1,
        name: "2024 Porsche 911 GT3Rs",
        brand: "Porsche",
        model: "911 GT3Rs",
        color: "white",
        year: 2024,
        mileage: 4000,
        price: 300000,
        bodyType: "Coupe",
        doors: 2,
        engine: "4.0-liter naturally aspirated flat-six",
        transmission: "7-speed dual-clutch automatic",
        fuel: "Gasoline",
        driveTrain: "Rear Wheel Drive (RWD)",
        bannerPic: "./CarDetails/GT3_Rs/Porsche_911_GT3Rs.png",
        detailPic: ["./CarDetails/GT3_Rs/p1.jpg","./CarDetails/GT3_Rs/p2.jpg","./CarDetails/GT3_Rs/p3.jpg","./CarDetails/GT3_Rs/p4.jpg","./CarDetails/GT3_Rs/p5.jpg","./CarDetails/GT3_Rs/p6.jpg","./CarDetails/GT3_Rs/p7.jpg","./CarDetails/GT3_Rs/p8.jpg"],
    },
    {
        id:2,
        name: "2017 Ferrari 488 Spider",
        brand: "Ferrari",
        model: "488 Spider",
        color: "white",
        year: 2017,
        mileage: 1000,
        price: 296524,
        bodyType: "Convertible",
        doors: 2,
        engine: "3.9-liter twin-turbocharged V8",
        transmission: "7-speed dual-clutch automatic",
        fuel: "Gasoline",
        driveTrain: "Rear Wheel Drive (RWD)",
        bannerPic: "./CarDetails/Ferrari 488 Spider/Ferrari488Spider.jpg",
        detailPic: ["./CarDetails/Ferrari 488 Spider/p1.jpg","./CarDetails/Ferrari 488 Spider/p2.jpg","./CarDetails/Ferrari 488 Spider/p3.jpg","./CarDetails/Ferrari 488 Spider/p4.jpg","./CarDetails/Ferrari 488 Spider/p5.jpg","./CarDetails/Ferrari 488 Spider/p6.jpg","./CarDetails/Ferrari 488 Spider/p7.jpg","./CarDetails/Ferrari 488 Spider/p8.jpg"],
    },
    {
        id:3,
        name: "2024 Aston Martin Valkyrie",
        brand: "Aston Martin",
        model: "Valkyrie",
        color: "green",
        year: 2024,
        mileage: 300,
        price: 3500000,
        bodyType: "Convertible",
        doors: 2,
        engine: " 6.5-liter V12",
        transmission: " 7-speed paddle-shift transmission",
        fuel: "Hybrid",
        driveTrain: "Rear Wheel Drive (RWD)",
        bannerPic: "./CarDetails/AstonMartinValkyrie/AstonMartinValkyrie.jpg",
        detailPic: ["./CarDetails/AstonMartinValkyrie/p1.jpg","./CarDetails/AstonMartinValkyrie/p2.jpg","./CarDetails/AstonMartinValkyrie/p3.jpg","./CarDetails/AstonMartinValkyrie/p4.jpg",],
    },
    {
        id:4,
        name: "Pagani Huayra BC Roadster",
        brand: "Pagani",
        model: "Huayra",
        color: "black",
        year: 2020,
        mileage: 0,
        price: 3600000,
        bodyType: "Convertible",
        doors: 2,
        engine: "6.0-liter twin-turbocharged V12",
        transmission: "7-speed automated manual transmission (AMT)",
        fuel: "Gasoline",
        driveTrain: "Rear Wheel Drive (RWD)",
        bannerPic: "./CarDetails/PaganiHuayra/PaganiHuayra.jpg",
        detailPic: ["./CarDetails/PaganiHuayra/p1.jpg","./CarDetails/PaganiHuayra/p2.jpg","./CarDetails/PaganiHuayra/p3.jpg","./CarDetails/PaganiHuayra/p4.jpg","./CarDetails/PaganiHuayra/p5.jpg","./CarDetails/PaganiHuayra/p6.jpg","./CarDetails/PaganiHuayra/p7.jpg","./CarDetails/PaganiHuayra/p8.jpg",],
    },
    {
        id:5,
        name: "2022 Porsche Panamera Platinum Edition",
        brand: "Porsche",
        model: "Panamera",
        color: "black",
        year: 2022,
        mileage: 1300,
        price: 91000,
        bodyType: "Sedan",
        doors: 4,
        engine: "2.9-liter twin-turbocharged V6",
        transmission: "8-speed dual-clutch automatic transmission (DCT)",
        fuel: "Gasoline",
        driveTrain: "All Wheel Drive (AWD)",
        bannerPic: "./CarDetails/PorschePanamera/PorschePanamera.jpg",
        detailPic: ["./CarDetails/PorschePanamera/p1.jpg","./CarDetails/PorschePanamera/p2.jpg","./CarDetails/PorschePanamera/p3.jpg","./CarDetails/PorschePanamera/p4.jpg","./CarDetails/PorschePanamera/p5.jpg",],
    },
    {
        id:6,
        name: "2020 Audi R8 Convertible",
        brand: "Audi",
        model: "R8",
        color: "blue",
        year: 2020,
        mileage: 3590,
        price: 175000,
        bodyType: "Convertible",
        doors: 2,
        engine: "5.2-liter V10",
        transmission: "7-speed dual-clutch automatic (S tronic)",
        fuel: "Gasoline",
        driveTrain: "All Wheel Drive (AWD)",
        bannerPic: "./CarDetails/AudiR8/AudiR8.jpg",
        detailPic: ["./CarDetails/AudiR8/p1.jpg","./CarDetails/AudiR8/p2.jpg","./CarDetails/AudiR8/p3.jpg","./CarDetails/AudiR8/p4.jpg","./CarDetails/AudiR8/p5.jpg","./CarDetails/AudiR8/p6.jpg","./CarDetails/AudiR8/p7.jpg","./CarDetails/AudiR8/p8.jpg",],
    },
    {
        id:7,
        name: "2020 Dodge Challenger SRT",
        brand: "Dodge",
        model: "Challenger SRT, Hellcat",
        color: "red",
        year: 2020,
        mileage: 15000,
        price: 70000,
        bodyType: "Coupe",
        doors: 2,
        engine: "6.2L Supercharged HEMI® V8",
        transmission: "8-Speed Automatic",
        fuel: "Gasoline",
        driveTrain: "Rear Wheel Drive (RWD)",
        bannerPic: "./CarDetails/DodgeChallenger/DodgeHellcat.jpg",
        detailPic: ["./CarDetails/DodgeChallenger/p1.jpg","./CarDetails/DodgeChallenger/p2.jpg","./CarDetails/DodgeChallenger/p3.jpg","./CarDetails/DodgeChallenger/p4.jpg","./CarDetails/DodgeChallenger/p5.jpg","./CarDetails/DodgeChallenger/p6.jpg","./CarDetails/DodgeChallenger/p7.jpg","./CarDetails/DodgeChallenger/p8.jpg",],
    },
    {
        id:8,
        name: "2016 Koenigsegg Regera",
        brand: "Koenigsegg",
        model: "Regera",
        color: "blue",
        year: 2016,
        mileage: 10,
        price: 1900000,
        bodyType: "Coupe",
        doors: 2,
        engine: "Twin-turbocharged 5.0-liter V8 paired with three electric motors",
        transmission: "Direct drive system (Koenigsegg Direct Drive or KDD)",
        fuel: "Hybrid",
        driveTrain: "Rear Wheel Drive (RWD)",
        bannerPic: "./CarDetails/KoenigseggRegera/KoenigseggRegera.jpg",
        detailPic: ["./CarDetails/KoenigseggRegera/p1.jpg","./CarDetails/KoenigseggRegera/p2.jpg","./CarDetails/KoenigseggRegera/p3.jpg","./CarDetails/KoenigseggRegera/p4.jpg","./CarDetails/KoenigseggRegera/p5.jpg","./CarDetails/KoenigseggRegera/p6.jpg","./CarDetails/KoenigseggRegera/p7.jpg","./CarDetails/KoenigseggRegera/p8.jpg",],
    },
    {
        id:9,
        name: "2019 Lamborghini Sián FKP 37",
        brand: "Lamborghini",
        model: "Sián FKP 37",
        color: "green",
        year: 2019,
        mileage: 2000,
        price: 1100000,
        bodyType: "Coupe",
        doors: 2,
        engine: "6.5-liter naturally aspirated V12 engine paired with a 48-volt mild-hybrid system",
        transmission: "7-speed Independent Shifting Rod",
        fuel: "semi-Hybrid",
        driveTrain: "All Wheel Drive (AWD)",
        bannerPic: "./CarDetails/LamborghiniSianFKP37/Lamborghini.jpg",
        detailPic: ["./CarDetails/LamborghiniSianFKP37/p1.jpg","./CarDetails/LamborghiniSianFKP37/p2.jpg","./CarDetails/LamborghiniSianFKP37/p3.jpg","./CarDetails/LamborghiniSianFKP37/p4.jpg","./CarDetails/LamborghiniSianFKP37/p5.jpg","./CarDetails/LamborghiniSianFKP37/p6.jpg","./CarDetails/LamborghiniSianFKP37/p7.jpg","./CarDetails/LamborghiniSianFKP37/p8.jpg",],
    },
    {
        id:10,
        name: "2019 Mercedes-AMG G63",
        brand: "Mercedes",
        model: "G63",
        color: "white",
        year: 2019,
        mileage: 1590,
        price: 190000,
        bodyType: "SUV",
        doors: 4,
        engine: " 4.0-liter V8 twin-turbocharged",
        transmission: "9-speed automatic transmission (AMG Speedshift TCT)",
        fuel: "Gasoline",
        driveTrain: "All Wheel Drive (AWD)",
        bannerPic: "./CarDetails/G63AMG/MercedesG63.jpg",
        detailPic: ["./CarDetails/G63AMG/p1.jpg","./CarDetails/G63AMG/p2.jpg","./CarDetails/G63AMG/p3.jpg","./CarDetails/G63AMG/p4.jpg","./CarDetails/G63AMG/p5.jpg","./CarDetails/G63AMG/p6.jpg","./CarDetails/G63AMG/p7.jpg","./CarDetails/G63AMG/p8.jpg",],
    },
    {
        id:11,
        name: "2024 BMW M3",
        brand: "BMW",
        model: "M3",
        color: "green",
        year: 2024,
        mileage: 340,
        price: 78000,
        bodyType: "Sedan",
        doors: 4,
        engine: "3.0-liter inline-6 engine",
        transmission: "6-speed manual",
        fuel: "Gasoline",
        driveTrain: "Rear Wheel Drive (RWD)",
        bannerPic: "./CarDetails/BMWM3/BMWM3.jpg",
        detailPic: ["./CarDetails/BMWM3/p1.jpg","./CarDetails/BMWM3/p2.jpg","./CarDetails/BMWM3/p3.jpg","./CarDetails/BMWM3/p4.jpg","./CarDetails/BMWM3/p5.jpg","./CarDetails/BMWM3/p6.jpg",],
    },
    {
        id:12,
        name: "2019 BMW X5",
        brand: "BMW",
        model: "X5",
        color: "white",
        year: 2019,
        mileage: 1430,
        price: 62500,
        bodyType: "SAV",
        doors: 5,
        engine: "2.0L inline-4 turbocharged",
        transmission: "8-speed automatic (Steptronic)",
        fuel: "Gasoline",
        driveTrain: "All Wheel Drive (AWD)",
        bannerPic: "./CarDetails/BMWX5/BMWX5.jpg",
        detailPic: ["./CarDetails/BMWX5/p1.jpg","./CarDetails/BMWX5/p2.jpg","./CarDetails/BMWX5/p3.jpg","./CarDetails/BMWX5/p4.jpg","./CarDetails/BMWX5/p5.jpg","./CarDetails/BMWX5/p6.jpg","./CarDetails/BMWX5/p7.jpg","./CarDetails/BMWX5/p8.jpg",],
    },
    {
        id:13,
        name: "2021 Cadillac Escalade ESV Sport Platinum",
        brand: "Cadillac",
        model: "Escalade",
        color: "black",
        year: 2021,
        mileage: 2400,
        price: 80000,
        bodyType: "SUV",
        doors: 4,
        engine: "6.2-liter V8",
        transmission: "10-speed automatic",
        fuel: "Gasoline",
        driveTrain: "Rear Wheel Drive (RWD), 4 Wheel Drive (4WD)",
        bannerPic: "./CarDetails/CadillacEscalade/CadillacEscalade.jpg",
        detailPic: ["./CarDetails/CadillacEscalade/p1.jpg","./CarDetails/CadillacEscalade/p2.jpg","./CarDetails/CadillacEscalade/p3.jpg","./CarDetails/CadillacEscalade/p4.jpg","./CarDetails/CadillacEscalade/p5.jpg","./CarDetails/CadillacEscalade/p6.jpg","./CarDetails/CadillacEscalade/p7.jpg","./CarDetails/CadillacEscalade/p8.jpg",],
    },
    {
        id:14,
        name: "2020 Chevrolet Corvette Stingray",
        brand: "Chevrolet",
        model: "Corvette Stingray",
        color: "red",
        year: 2020,
        mileage: 3400,
        price: 69000,
        bodyType: "Convertible",
        doors: 2,
        engine: "6.2-liter V8 ",
        transmission: "8-speed dual-clutch automatic",
        fuel: "Gasoline",
        driveTrain: "Rear Wheel Drive (RWD)",
        bannerPic: "./CarDetails/ChevroletCorvette/ChevroletCorvette.jpg",
        detailPic: ["./CarDetails/ChevroletCorvette/p1.jpg","./CarDetails/ChevroletCorvette/p2.jpg","./CarDetails/ChevroletCorvette/p3.jpg","./CarDetails/ChevroletCorvette/p4.jpg","./CarDetails/ChevroletCorvette/p5.jpg","./CarDetails/ChevroletCorvette/p6.jpg","./CarDetails/ChevroletCorvette/p7.jpg","./CarDetails/ChevroletCorvette/p8.jpg",],
    },
    {
        id:15,
        name: "2018 Ford F-150 Raptor",
        brand: "Ford",
        model: "F150 Raptor",
        color: "black",
        year: 2018,
        mileage: 40000,
        price: 43000,
        bodyType: "Pickup Truck",
        doors: 4,
        engine: "3.5L V6 EcoBoost",
        transmission: "10-speed automatic",
        fuel: "Gasoline",
        driveTrain: "4 Wheel Drive (4WD)",
        bannerPic: "./CarDetails/FordF150Raptor/FordF150Raptor.jpg",
        detailPic: ["./CarDetails/FordF150Raptor/p1.jpg","./CarDetails/FordF150Raptor/p2.jpg","./CarDetails/FordF150Raptor/p3.jpg","./CarDetails/FordF150Raptor/p4.jpg","./CarDetails/FordF150Raptor/p5.jpg","./CarDetails/FordF150Raptor/p6.jpg","./CarDetails/FordF150Raptor/p7.jpg","./CarDetails/FordF150Raptor/p8.jpg",],
    },
    {
        id:16,
        name: " 2017 GMC Canyon",
        brand: "GMC",
        model: "Canyon",
        color: "black",
        year: 2017,
        mileage: 29000,
        price: 18000,
        bodyType: "Pickup Truck",
        doors: 4,
        engine: "3.6L V6",
        transmission: "6-speed automatic",
        fuel: "Gasoline",
        driveTrain: "4 Wheel Drive (4WD)",
        bannerPic: "./CarDetails/GMCCanyon/GMCCanyon.jpg",
        detailPic: ["./CarDetails/GMCCanyon/p1.jpg","./CarDetails/GMCCanyon/p2.jpg","./CarDetails/GMCCanyon/p3.jpg","./CarDetails/GMCCanyon/p4.jpg","./CarDetails/GMCCanyon/p5.jpg","./CarDetails/GMCCanyon/p6.jpg","./CarDetails/GMCCanyon/p7.jpg","./CarDetails/GMCCanyon/p8.jpg",],
    },
    {
        id:17,
        name: "2018 Honda Civic Type R",
        brand: "Honda",
        model: "Civic",
        color: "blue",
        year: 2018,
        mileage: 12000,
        price: 29000,
        bodyType: "Hatchback",
        doors: 4,
        engine: "2.0L inline-4 turbocharged",
        transmission: "6-speed manual",
        fuel: "Premium Gasoline",
        driveTrain: "Front Wheel Drive (FWD)",
        bannerPic: "./CarDetails/HondaCivicTypeR/HondaCivicTypeR.jpg",
        detailPic: ["./CarDetails/HondaCivicTypeR/p1.jpg","./CarDetails/HondaCivicTypeR/p2.jpg","./CarDetails/HondaCivicTypeR/p3.jpg","./CarDetails/HondaCivicTypeR/p4.jpg","./CarDetails/HondaCivicTypeR/p5.jpg","./CarDetails/HondaCivicTypeR/p6.jpg","./CarDetails/HondaCivicTypeR/p7.jpg","./CarDetails/HondaCivicTypeR/p8.jpg",],
    },
    {
        id:18,
        name: "2018 Hyundai Accent Manual",
        brand: "Hyundai",
        model: "Accent",
        color: "white",
        year: 2018,
        mileage: 24500,
        price: 10900,
        bodyType: "Sedan",
        doors: 4,
        engine: "2.0L I4",
        transmission: "6-speed manual",
        driveTrain: "Front Wheel Drive (FWD)",
        bannerPic: "./CarDetails/HyundaiAccent/HyundaiAccent.jpg",
        detailPic: ["./CarDetails/HyundaiAccent/p1.jpg","./CarDetails/HyundaiAccent/p2.jpg","./CarDetails/HyundaiAccent/p3.jpg","./CarDetails/HyundaiAccent/p4.jpg","./CarDetails/HyundaiAccent/p5.jpg","./CarDetails/HyundaiAccent/p6.jpg","./CarDetails/HyundaiAccent/p7.jpg","./CarDetails/HyundaiAccent/p8.jpg",],
    },
    {
        id:19,
        name: "2022 Jaguar F-Type",
        brand: "Jaguar",
        model: "F-Type",
        color: "white",
        year: 2022,
        mileage: 2340,
        price: 72000,
        bodyType: "Convertible",
        doors: 2,
        engine: "5.0L V8",
        transmission: "8-speed automatic",
        fuel: "Gasoline",
        driveTrain: "Rear Wheel Drive (RWD)",
        bannerPic: "./CarDetails/JaguarF-type/JaguarF-type.jpg",
        detailPic: ["./CarDetails/JaguarF-type/p1.jpg","./CarDetails/JaguarF-type/p2.jpg","./CarDetails/JaguarF-type/p3.jpg","./CarDetails/JaguarF-type/p4.jpg","./CarDetails/JaguarF-type/p5.jpg","./CarDetails/JaguarF-type/p6.jpg","./CarDetails/JaguarF-type/p7.jpg","./CarDetails/JaguarF-type/p8.jpg",],
    },
    {
        id:20,
        name: "2017 Nissan GT-R",
        brand: "Nissan",
        model: "GT-R",
        color: "orange",
        year: 2017,
        mileage: 3200,
        price: 100000,
        bodyType: "Coupe",
        doors: 2,
        engine: "3.8L V6, Twin Turbo",
        transmission: " 6-speed dual-clutch automatic",
        fuel: "Gasoline",
        driveTrain: "All Wheel Drive (AWD)",
        bannerPic: "./CarDetails/NissanGTR/NissanGTR.jpg",
        detailPic: ["./CarDetails/NissanGTR/p1.jpg","./CarDetails/NissanGTR/p2.jpg","./CarDetails/NissanGTR/p3.jpg","./CarDetails/NissanGTR/p4.jpg","./CarDetails/NissanGTR/p5.jpg","./CarDetails/NissanGTR/p6.jpg","./CarDetails/NissanGTR/p7.jpg","./CarDetails/NissanGTR/p8.jpg","./CarDetails/NissanGTR/p9.jpg","./CarDetails/NissanGTR/p10.jpg","./CarDetails/NissanGTR/p11.jpg","./CarDetails/NissanGTR/p12.jpg",],
    },
    {
        id:21,
        name: "2021 Kia K5 GT 2.5T",
        brand: "Kia",
        model: "K5 GT",
        color: "blue",
        year: 2021,
        mileage: 3432,
        price: 30590,
        bodyType: "Sedan",
        doors: 4,
        engine: "2.5-liter turbocharged inline-4 engine",
        transmission: "8-speed dual-clutch automatic transmission",
        fuel: "Gasoline",
        driveTrain: "Front Wheel Drive (FWD)",
        bannerPic: "./CarDetails/KiaK5/KiaK5.jpg",
        detailPic: ["./CarDetails/KiaK5/p1.jpg","./CarDetails/KiaK5/p2.jpg","./CarDetails/KiaK5/p3.jpg","./CarDetails/KiaK5/p4.jpg","./CarDetails/KiaK5/p5.jpg","./CarDetails/KiaK5/p6.jpg","./CarDetails/KiaK5/p7.jpg","./CarDetails/KiaK5/p8.jpg",],
    },
    {
        id:22,
        name: "2024 BMW 530i",
        brand: "BMW",
        model: "530i",
        color: "green",
        year: 2024,
        mileage: 0,
        price: 59500,
        bodyType: "Sedan",
        doors: 4,
        engine: "2.0-liter turbocharged inline-4 engine",
        transmission: "8-speed automatic transmission with manual shift mode",
        fuel: "Gasoline",
        driveTrain: "Rear Wheel Drive (RWD)",
        bannerPic: "./CarDetails/BMW530i/BMW530i.jpg",
        detailPic: ["./CarDetails/BMW530i/p1.jpg","./CarDetails/BMW530i/p2.jpg","./CarDetails/BMW530i/p3.jpg","./CarDetails/BMW530i/p4.jpg","./CarDetails/BMW530i/p5.jpg","./CarDetails/BMW530i/p6.jpg","./CarDetails/BMW530i/p7.jpg","./CarDetails/BMW530i/p8.jpg",],
    },
    {
        id:23,
        name: "2019 Subaru WRX STI",
        brand: "Subaru",
        model: "WRX STI",
        color: "white",
        year: 2019,
        mileage: 5600,
        price: 38500,
        bodyType: "Sedan",
        doors: 4,
        engine: " 2.5L 4-cylinder Boxer engine",
        transmission: " 6-speed manual",
        fuel: "Gasoline",
        driveTrain: "All Wheel Drive (AWD)",
        bannerPic: "./CarDetails/SubaruWRXSTI/SubaruWRXSTI.jpg",
        detailPic: ["./CarDetails/SubaruWRXSTI/p1.jpg","./CarDetails/SubaruWRXSTI/p2.jpg","./CarDetails/SubaruWRXSTI/p3.jpg","./CarDetails/SubaruWRXSTI/p4.jpg","./CarDetails/SubaruWRXSTI/p5.jpg","./CarDetails/SubaruWRXSTI/p6.jpg","./CarDetails/SubaruWRXSTI/p7.jpg","./CarDetails/SubaruWRXSTI/p8.jpg",],
    },
    {
        id:24,
        name: "2020 Lamborghini Huracán Evo",
        brand: "Lamborghini",
        model: "Huracán Evo",
        color: "gray",
        year: 2020,
        mileage: 230,
        price: 262000,
        bodyType: "Coupe",
        doors: 2,
        engine: "5.2-liter naturally aspirated V10",
        transmission: "7-speed dual-clutch automatic transmission (Lamborghini Doppia Frizione or LDF)",
        fuel: "Gasoline",
        driveTrain: "All Wheel Drive (AWD)",
        bannerPic: "./CarDetails/LamborghiniHuracanEvo/LamborghiniHuracanEvo.jpg",
        detailPic: ["./CarDetails/LamborghiniHuracanEvo/p1.jpg","./CarDetails/LamborghiniHuracanEvo/p2.jpg","./CarDetails/LamborghiniHuracanEvo/p3.jpg","./CarDetails/LamborghiniHuracanEvo/p4.jpg","./CarDetails/LamborghiniHuracanEvo/p5.jpg","./CarDetails/LamborghiniHuracanEvo/p6.jpg",],
    },
    {
        id:25,
        name: "2020 Land Rover Defender",
        brand: "Land Rover",
        model: "Defender",
        color: "green",
        year: 2020,
        mileage: 4380,
        price: 50000,
        bodyType: "Off-road SUV",
        doors: 4,
        engine: "2.0-liter turbocharged inline-4",
        transmission: "8-speed automatic",
        fuel: "Gasoline",
        driveTrain: "4 Wheel Drive (4WD)",
        bannerPic: "./CarDetails/LandRoverDefender/LandRoverDefender.jpg",
        detailPic: ["./CarDetails/LandRoverDefender/p1.jpg","./CarDetails/LandRoverDefender/p2.jpg","./CarDetails/LandRoverDefender/p3.jpg","./CarDetails/LandRoverDefender/p4.jpg","./CarDetails/LandRoverDefender/p5.jpg","./CarDetails/LandRoverDefender/p6.jpg","./CarDetails/LandRoverDefender/p7.jpg","./CarDetails/LandRoverDefender/p8.jpg",],
    },
    {
        id:26,
        name: "2018 Lexus RX450hL",
        brand: "Lexus",
        model: "RX450hL",
        color: "blue",
        year: 2018,
        mileage: 34560,
        price: 51000,
        bodyType: "SUV",
        doors: 4,
        engine: "3.5-liter V6 hybrid engine paired with electric motors",
        transmission: "Continuously Variable Transmission (CVT)",
        fuel: "Hybrid",
        driveTrain: "All Wheel Drive (AWD)",
        bannerPic: "./CarDetails/LexusRX450hL/LexusRX450hL.jpg",
        detailPic: ["./CarDetails/LexusRX450hL/p1.jpg","./CarDetails/LexusRX450hL/p2.jpg","./CarDetails/LexusRX450hL/p3.jpg","./CarDetails/LexusRX450hL/p4.jpg","./CarDetails/LexusRX450hL/p5.jpg","./CarDetails/LexusRX450hL/p6.jpg","./CarDetails/LexusRX450hL/p7.jpg","./CarDetails/LexusRX450hL/p8.jpg",],
    },
    {
        id:27,
        name: "2018 Maserati GranTurismo Convertible",
        brand: "Maserati",
        model: "GranTurismo",
        color: "black",
        year: 2018,
        mileage: 3423,
        price: 168000,
        bodyType: "Convertible",
        doors: 2,
        engine: "4.7-liter naturally aspirated V8",
        transmission: "6-speed automatic transmission with manual shifting capabilities",
        fuel: "Gasoline",
        driveTrain: "Rear Wheel Drive (RWD)",
        bannerPic: "./CarDetails/MaseratiGranTurismo/MaseratiGranTurismo.jpg",
        detailPic: ["./CarDetails/MaseratiGranTurismo/p1.jpg","./CarDetails/MaseratiGranTurismo/p2.jpg","./CarDetails/MaseratiGranTurismo/p3.jpg","./CarDetails/MaseratiGranTurismo/p4.jpg","./CarDetails/MaseratiGranTurismo/p5.jpg","./CarDetails/MaseratiGranTurismo/p6.jpg",],
    },
    {
        id:28,
        name: " 2017 Mazda MX-5 Miata RF",
        brand: "Mazda",
        model: "Miata RF",
        color: "white",
        year: 2017,
        mileage: 4590,
        price: 32000,
        bodyType: "Coupe/Convertible",
        doors: 2,
        engine: "2.0-liter inline-4",
        transmission: " 6-speed manual",
        fuel: "Gasoline",
        driveTrain: "Rear Wheel Drive (RWD)",
        bannerPic: "./CarDetails/MazdaMiataRF/MazdaMiataRF.jpg",
        detailPic: ["./CarDetails/MazdaMiataRF/p1.jpg","./CarDetails/MazdaMiataRF/p2.jpg","./CarDetails/MazdaMiataRF/p3.jpg","./CarDetails/MazdaMiataRF/p4.jpg","./CarDetails/MazdaMiataRF/p5.jpg","./CarDetails/MazdaMiataRF/p6.jpg","./CarDetails/MazdaMiataRF/p7.jpg","./CarDetails/MazdaMiataRF/p8.jpg",],
    },
    {
        id:29,
        name: "2014 McLaren P1",
        brand: "McLaren",
        model: "P1",
        color: "yellow",
        year: 2014,
        mileage: 1250,
        price: 1150000,
        bodyType: "Coupe",
        doors: 2,
        engine: "3.8-liter twin-turbocharged V8 engine paired with an electric motor",
        transmission: "7-speed dual-clutch automatic transmission (DCT)",
        fuel: "Hybrid",
        driveTrain: "Rear Wheel Drive (RWD)",
        bannerPic: "./CarDetails/McLarenP1/McLarenP1.jpg",
        detailPic: ["./CarDetails/McLarenP1/p1.jpg","./CarDetails/McLarenP1/p2.jpg","./CarDetails/McLarenP1/p3.jpg","./CarDetails/McLarenP1/p4.jpg","./CarDetails/McLarenP1/p5.jpg","./CarDetails/McLarenP1/p6.jpg","./CarDetails/McLarenP1/p7.jpg","./CarDetails/McLarenP1/p8.jpg",],
    },
    {
        id:30,
        name: "2021 Mercedes-AMG GLA35",
        brand: "Mercedes",
        model: "GLA35",
        color: "red",
        year: 2021,
        mileage: 6430,
        price: 47000,
        bodyType: "SUV",
        doors: 5,
        engine: "2.0-liter turbocharged inline-4",
        transmission: "8-speed dual-clutch automatic transmission (DCT)",
        fuel: "Gasoline",
        driveTrain: "All Wheel Drive (4MATIC)",
        bannerPic: "./CarDetails/MercedesAMGGLA35/MercedesAMGGLA35.jpg",
        detailPic: ["./CarDetails/MercedesAMGGLA35/p1.jpg","./CarDetails/MercedesAMGGLA35/p2.jpg","./CarDetails/MercedesAMGGLA35/p3.jpg","./CarDetails/MercedesAMGGLA35/p4.jpg","./CarDetails/MercedesAMGGLA35/p5.jpg","./CarDetails/MercedesAMGGLA35/p6.jpg","./CarDetails/MercedesAMGGLA35/p7.jpg","./CarDetails/MercedesAMGGLA35/p8.jpg",],
    },
    {
        id:31,
        name: "2020 Mercedes-Benz CLA250 4MATIC",
        brand: "Mercedes",
        model: "CLA250",
        color: "blue",
        year: 2020,
        mileage: 7800,
        price: 39500,
        bodyType: "Sedan",
        doors: 4,
        engine: "2.0-liter turbocharged inline-4",
        transmission: "7-speed dual-clutch automatic transmission (DCT)",
        fuel: "Gasoline",
        driveTrain: "All Wheel Drive (4MATIC)",
        bannerPic: "./CarDetails/MercedesBenzCLA250/MercedesBenzCLA250.jpg",
        detailPic: ["./CarDetails/MercedesBenzCLA250/p1.jpg","./CarDetails/MercedesBenzCLA250/p2.jpg","./CarDetails/MercedesBenzCLA250/p3.jpg","./CarDetails/MercedesBenzCLA250/p4.jpg","./CarDetails/MercedesBenzCLA250/p5.jpg","./CarDetails/MercedesBenzCLA250/p6.jpg","./CarDetails/MercedesBenzCLA250/p7.jpg","./CarDetails/MercedesBenzCLA250/p8.jpg",],
    },
    {
        id:32,
        name: "2018 Nissan 370Z Heritage Edition",
        brand: "Nissan",
        model: "370Z",
        color: "yellow",
        year: 2018,
        mileage: 32900,
        price: 35000,
        bodyType: "Coupe",
        doors: 2,
        engine: "3.7-liter V6",
        transmission: "6-speed manual",
        fuel: "Gasoline",
        driveTrain: "Rear Wheel Drive (RWD)",
        bannerPic: "./CarDetails/Nissan370ZHeritageEdition/Nissan370ZHeritageEdition.jpg",
        detailPic: ["./CarDetails/Nissan370ZHeritageEdition/p1.jpg","./CarDetails/Nissan370ZHeritageEdition/p2.jpg","./CarDetails/Nissan370ZHeritageEdition/p3.jpg","./CarDetails/Nissan370ZHeritageEdition/p4.jpg","./CarDetails/Nissan370ZHeritageEdition/p5.jpg","./CarDetails/Nissan370ZHeritageEdition/p6.jpg","./CarDetails/Nissan370ZHeritageEdition/p7.jpg","./CarDetails/Nissan370ZHeritageEdition/p8.jpg",],
    },
    {
        id:33,
        name: "2017 Mini Cooper S R56",
        brand: "Mini Cooper",
        model: "Mini Copper S R56",
        color: "red",
        year: 2017,
        mileage: 10000,
        price: 21400,
        bodyType: "Hatchback",
        doors: 3,
        engine: " 1.6-liter turbocharged I-4",
        transmission: "6-speed manual",
        fuel: "Gasoline",
        driveTrain: "Front Wheel Drive (FWD)",
        bannerPic: "./CarDetails/2017 Mini Cooper S R56/MiniCooper.jpg",
        detailPic: ["./CarDetails/2017 Mini Cooper S R56/p1.jpg","./CarDetails/2017 Mini Cooper S R56/p2.jpg","./CarDetails/2017 Mini Cooper S R56/p3.jpg","./CarDetails/2017 Mini Cooper S R56/p4.jpg",],
    },
    {
        id:34,
        name: "2023 Bentley Bentayga",
        brand: "Bentley",
        model: "Bentayga",
        color: "blue",
        year: 2023,
        mileage: 1320,
        price: 201000,
        bodyType: "SUV",
        doors: 4,
        engine: "4.0L V8 twin-turbocharged",
        transmission: "8-speed automatic with overdrive",
        fuel: "Gasoline",
        driveTrain: "All Wheel Drive (AWD)",
        bannerPic: "./CarDetails/BentleyBentayga/BentleyBentayga.jpg",
        detailPic: ["./CarDetails/BentleyBentayga/p1.jpg","./CarDetails/BentleyBentayga/p2.jpg","./CarDetails/BentleyBentayga/p3.jpg","./CarDetails/BentleyBentayga/p4.jpg","./CarDetails/BentleyBentayga/p5.jpg","./CarDetails/BentleyBentayga/p6.jpg",],
    },
    {
        id:35,
        name: "2022 Toyota RAV4",
        brand: "Toyota",
        model: "RAV4",
        color: "gray",
        year: 2022,
        mileage: 450,
        price: 28000,
        bodyType: "SUV",
        doors: 4,
        engine: "2.5-liter inline-4",
        transmission: "8-speed automatic",
        fuel: "Gasoline",
        driveTrain: "Front Wheel Drive (FWD)",
        bannerPic: "./CarDetails/ToyotaRAV4/ToyotaRAV4.jpg",
        detailPic: ["./CarDetails/ToyotaRAV4/p1.jpg","./CarDetails/ToyotaRAV4/p2.jpg","./CarDetails/ToyotaRAV4/p3.jpg","./CarDetails/ToyotaRAV4/p4.jpg","./CarDetails/ToyotaRAV4/p5.jpg","./CarDetails/ToyotaRAV4/p6.jpg",],
    },
    {
        id:36,
        name: "2020 Volvo XC90 T8 Inscription",
        brand: "Volvo",
        model: "XC90",
        color: "gray",
        year: 2020,
        mileage: 300,
        price: 72000,
        bodyType: "SUV",
        doors: 4,
        engine: "2.0-liter turbocharged and supercharged inline-4 engine paired with an electric motor",
        transmission: " 8-speed automatic",
        fuel: "Hybrid",
        driveTrain: "All Wheel Drive (AWD)",
        bannerPic: "./CarDetails/VolvoXC90/VolvoXC90.jpg",
        detailPic: ["./CarDetails/VolvoXC90/p1.jpg","./CarDetails/VolvoXC90/p2.jpg","./CarDetails/VolvoXC90/p3.jpg","./CarDetails/VolvoXC90/p4.jpg","./CarDetails/VolvoXC90/p5.jpg","./CarDetails/VolvoXC90/p6.jpg","./CarDetails/VolvoXC90/p7.jpg","./CarDetails/VolvoXC90/p8.jpg",],
    },
]

export default data;