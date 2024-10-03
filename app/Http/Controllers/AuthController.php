<?php

namespace App\Http\Controllers;
use App\Models\User;
use Inertia\Inertia;

use Illuminate\Http\Request;

class AuthController extends Controller
{
    //
    public function home()
    {
        return inertia::render('Auth/Login');
    }
    public function login(Request $request)
    {
        $user = User::where("email", $request->email)->first();
        if($user) {
            if($user->password === $request->password) {
                return redirect()->route('Dashboard')->with("Login Success");
            }
        }
        return redirect()->route('login')->with("Something went wrong!");
    }
}
