import math

# Example usage:
S0 = 100
K = 100
T = 1.0
r = 0.05
sigma = 0.2

# Binomial Tree Model
def binomial_tree(S, K, T, r, sigma, N=100, option_type='call'):
    # Step size
    dt = T / N
    # Up and down factors
    u = math.exp(sigma * math.sqrt(dt))
    d = 1/u
    # Risk-neutral probability
    q = (math.exp(r*dt) - d) / (u - d)

    # Initialize asset prices at maturity
    prices = [(S * (u**j) * (d**(N-j))) for j in range(N+1)]

    # Initialize option values at maturity
    if option_type == 'call':
        values = [max(0, p - K) for p in prices]
    else:
        values = [max(0, K - p) for p in prices]

    # Step back through the tree
    for i in range(N-1, -1, -1):
        for j in range(i+1):
            # Discounted expected value under the risk-neutral measure
            values[j] = math.exp(-r*dt)*(q*values[j+1] + (1-q)*values[j])

    return values[0]

binomial_call = binomial_tree(S0, K, T, r, sigma, N=100, option_type='call')
binomial_put = binomial_tree(S0, K, T, r, sigma, N=100, option_type='put')
print("Binomial Call Price:", binomial_call)
print("Binomial Put Price:", binomial_put)
