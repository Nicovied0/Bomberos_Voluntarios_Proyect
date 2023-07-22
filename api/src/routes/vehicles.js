const express = require("express");
const router = express.Router();
const Vehicles = require("../models/Vehicles");

// Obtener todos los vehículos
router.get("/", async (req, res) => {
  try {
    const todos = await Vehicles.find();
    console.log("Se llamó a la ruta /vehicles");
    res.json(todos);
  } catch (error) {
    console.error("Error al obtener los vehículos", error);
    res.status(500).json({ error: "Error al obtener los vehículos" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const vehicle = await Vehicles.findById(req.params.id);
    if (!vehicle) {
      return res.status(404).json({ error: "Vehículo no encontrado" });
    }
    console.log(`Se llamó a la ruta /vehicles/${req.params.id}`);
    res.json(vehicle);
  } catch (error) {
    console.error("Error al obtener el vehículo", error);
    res.status(500).json({ error: "Error al obtener el vehículo" });
  }
});

router.post("/", async (req, res) => {
  try {
    const {
      type,
      brand,
      model,
      year,
      color,
      image,
      patent,
      fuelType,
      mileage,
      tankSize,
      amountOfFuel,
      lastRecharge,
      lastMaintenance,
      lastServiceProgramed,
      waterCapacity,
    } = req.body;

    const newVehicle = new Vehicles({
      type,
      brand,
      model,
      year,
      color,
      image,
      patent,
      fuelType,
      mileage,
      tankSize,
      amountOfFuel,
      lastRecharge,
      lastMaintenance,
      lastServiceProgramed,
      waterCapacity,
    });

    const savedVehicle = await newVehicle.save();
    console.log("Se llamó a la ruta POST /vehicles");
    res.status(201).json(savedVehicle);
  } catch (error) {
    console.error("Error al crear el vehículo", error);
    res.status(500).json({ error: "Error al crear el vehículo" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const {
      type,
      brand,
      model,
      year,
      color,
      image,
      patent,
      fuelType,
      mileage,
      tankSize,
      amountOfFuel,
      lastRecharge,
      lastMaintenance,
      lastServiceProgramed,
      waterCapacity,
    } = req.body;

    const updatedVehicle = await Vehicles.findByIdAndUpdate(
      req.params.id,
      {
        type,
        brand,
        model,
        year,
        color,
        image,
        patent,
        fuelType,
        mileage,
        tankSize,
        amountOfFuel,
        lastRecharge,
        lastMaintenance,
        lastServiceProgramed,
        waterCapacity,
      },
      { new: true }
    );

    if (!updatedVehicle) {
      return res.status(404).json({ error: "Vehículo no encontrado" });
    }

    console.log(`Se llamó a la ruta PUT /vehicles/${req.params.id}`);
    res.json(updatedVehicle);
  } catch (error) {
    console.error("Error al modificar el vehículo", error);
    res.status(500).json({ error: "Error al modificar el vehículo" });
  }
});


// Ruta para agregar un nuevo mantenimiento a un vehículo específico/////
router.post("/:id/maintenance", async (req, res) => {
  try {
    const { fecha, descripcion } = req.body;
    const maintenance = { fecha, descripcion };

    const vehicle = await Vehicles.findById(req.params.id);

    if (!vehicle) {
      return res.status(404).json({ error: "Vehículo no encontrado" });
    }

    vehicle.lastMaintenance.push(maintenance);
    const updatedVehicle = await vehicle.save();

    console.log(`Se llamó a la ruta POST /vehicles/${req.params.id}/maintenance`);
    res.status(201).json(updatedVehicle);
  } catch (error) {
    console.error("Error al agregar el mantenimiento", error);
    res.status(500).json({ error: "Error al agregar el mantenimiento" });
  }
});

// Ruta para editar un mantenimiento específico de un vehículo
router.put("/:id/maintenance/:maintenanceId", async (req, res) => {
  try {
    const { fecha, descripcion } = req.body;

    const vehicle = await Vehicles.findById(req.params.id);

    if (!vehicle) {
      return res.status(404).json({ error: "Vehículo no encontrado" });
    }

    const maintenanceIndex = vehicle.lastMaintenance.findIndex(
      (maintenance) => maintenance._id.toString() === req.params.maintenanceId
    );

    if (maintenanceIndex === -1) {
      return res.status(404).json({ error: "Mantenimiento no encontrado" });
    }

    vehicle.lastMaintenance[maintenanceIndex].fecha = fecha;
    vehicle.lastMaintenance[maintenanceIndex].descripcion = descripcion;

    const updatedVehicle = await vehicle.save();

    console.log(`Se llamó a la ruta PUT /vehicles/${req.params.id}/maintenance/${req.params.maintenanceId}`);
    res.json(updatedVehicle);
  } catch (error) {
    console.error("Error al editar el mantenimiento", error);
    res.status(500).json({ error: "Error al editar el mantenimiento" });
  }
});

module.exports = router;
