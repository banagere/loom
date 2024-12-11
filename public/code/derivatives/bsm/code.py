from math import log, sqrt, exp
from scipy.stats import norm

# Example usage:
S0 = 100
K = 100
T = 1.0
r = 0.05
sigma = 0.2

# Black Scholes Merton Model
def black_scholes(S, K, T, r, sigma, option_type='call'):
    if T <= 0:
        if option_type == 'call':
            return max(0, S - K)
        else:
            return max(0, K - S)

    d1 = (log(S/K) + (r + 0.5*sigma**2)*T) / (sigma*sqrt(T))
    d2 = d1 - sigma*sqrt(T)

    if option_type == 'call':
        price = S*norm.cdf(d1) - K*exp(-r*T)*norm.cdf(d2)
    else:
        price = K*exp(-r*T)*norm.cdf(-d2) - S*norm.cdf(-d1)
    return price

call_price = black_scholes(S0, K, T, r, sigma, 'call')
put_price = black_scholes(S0, K, T, r, sigma, 'put')
print("BSM Call Price:", call_price)
print("BSM Put Price:", put_price)

