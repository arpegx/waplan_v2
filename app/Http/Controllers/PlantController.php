<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePlantRequest;
use App\Http\Requests\UpdatePlantRequest;
use App\Models\Plant;
use Inertia\Inertia;

class PlantController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $plants = Plant::all();
        return Inertia::render('Plant/Index', [$plants]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Plant/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePlantRequest $request)
    {
        //todo adjust file path or write js helper
        if ($request->hasFile("picture")) {
            $filename = request("nick_name") . "." . $request->file("picture")->extension();
            $request->file("picture")->storeAs('public/images/plant', $filename);
        }

        $plant = Plant::create([
            'nick_name' => request('nick_name'),
            'picture' => $request->file('picture') !== null ? "./storage/images/plant/" . $filename : null,
        ]);

        return to_route('plant.show', compact('plant'));
    }

    /**
     * Display the specified resource.
     */
    public function show(Plant $plant)
    {
        return Inertia::render('Plant/Show', $plant->toArray());
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Plant $plant)
    {
        return Inertia::render('Plant/Edit', $plant->toArray());
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePlantRequest $request, Plant $plant)
    {
        $plant
            ->fill($request->toArray())
            ->save();

        return to_route('plant.show', compact('plant'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Plant $plant)
    {
        $plant->delete();

        return to_route('plant.index');
    }
}
