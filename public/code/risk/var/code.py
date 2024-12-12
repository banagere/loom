import yfinance as yf
import numpy as np
from scipy.stats import norm

# Importing data
tickers = ['NESTLEIND.NS', 'ICICIBANK.NS', 'INDUSINDBK.NS', 'INFY.NS', 'ITC.NS']
data = yf.download(tickers, start='2023-12-01', end='2024-11-30')['Adj Close']
returns = data.pct_change().dropna()

# VaR
portfolio_weights = np.array([0.2, 0.2, 0.2, 0.2, 0.2])
portfolio_returns = (returns * portfolio_weights).sum(axis=1)
mu = portfolio_returns.mean()
sigma = portfolio_returns.std()

alpha = 0.95
z_alpha = norm.ppf(1 - alpha)
current_portfolio_value = 1000000
var_95 = - (mu + z_alpha * sigma) * current_portfolio_value
print("Var 95%:", round(var_95, 0))

sorted_returns = np.sort(portfolio_returns)
var_95_hist = -np.percentile(sorted_returns, (1 - alpha)*100) * current_portfolio_value
print("Var 95% Historical:", round(var_95_hist, 0))


# Monte Carlo Simulation
simulated_returns = np.random.normal(mu, sigma, size=100000)
var_95_mc = -np.percentile(simulated_returns, (1 - alpha)*100) * current_portfolio_value
print("Var 95% Monte Carlo:", round(var_95_mc, 0))

# if the VaR is breached
var_cutoff = np.percentile(portfolio_returns, (1 - alpha)*100)
tail_losses = portfolio_returns[portfolio_returns < var_cutoff]
cvar_95 = -tail_losses.mean() * current_portfolio_value
print("CVAR 95%:", round(cvar_95, 0))

# Maximum Draw-down
cumulative = (1 + portfolio_returns).cumprod()
rolling_max = cumulative.cummax()
drawdown = (cumulative - rolling_max) / rolling_max
max_drawdown = drawdown.min()

print("Maximum Drawdown", round(max_drawdown, 2))
