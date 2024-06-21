<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Login;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Validation\ValidationException;

class AuthenticatedSessionController extends Controller
{
    /**
     * Display the login view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
        ]);
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'login_email' => 'required|email', // It's a good practice to validate email format
            'login_password' => 'required',
        ]);

        // Determine if the user wants to be remembered
        $remember = $request->has('remember') ? true : false;

        // Create the user data array for authentication
        $userdata = [
            'email' => $request->login_email,
            'password' => $request->login_password,
        ];

        // Attempt to do the login with remember me functionality
        if (Auth::attempt($userdata, $remember)) {
            return redirect()->route('profile.edit', ['name' => auth()->user()->name]);
        } else {
            throw ValidationException::withMessages([
                'login_email' => trans('auth.failed'),
            ]);
        }
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
}
