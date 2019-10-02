<?php

namespace App\Http\Controllers\Api;

use App\Dados;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class DadosController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $dados= Dados::all();
        return response()->json($dados);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $dados = new Dados();
        
        $dados->nome = $request -> get('nome');
        $dados->telefone = $request -> get('telefone');
        $dados->conheceu = $request -> get('conheceu');
        
        $dados->possui_rede = $request -> get('possuirede');


        $redes= $request -> get('quais');
        $rd="";
        $contador=1;
        foreach($redes as $r){
            if($contador!=sizeof($redes))
             $rd=$rd.$r.",";
            else
            $rd=$rd.$r;
            $contador++;

        }
        $dados->rede =$rd;

        $dados->save();
        return redirect()->route('welcome')->with('success','Dados Adicionados');

        
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        $dados = Dados::where('id',$id)->get(); 
        return response()->json($dados);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
