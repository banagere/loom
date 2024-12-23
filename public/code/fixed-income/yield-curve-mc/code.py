import numpy as np
import matplotlib.pyplot as plt

simulations = 5000
timeToMaturity = np.array([1, 2, 5, 10, 20, 30])
initialYieldCurve = np.array([0.05, 0.055, 0.06, 0.065, 0.07, 0.075]) # example

mean = 0.0
standardDeviation = 0.001

# Monte Carlo simulation
simulatedYieldCurve = []
for _ in range(simulations):
    yieldChange = np.random.normal(mean, standardDeviation, len(timeToMaturity))
    new_yield_curve = initialYieldCurve + yieldChange
    simulatedYieldCurve.append(new_yield_curve)

simulatedYieldCurve = np.array(simulatedYieldCurve)

# Plot
plt.figure(figsize=(12, 6))
for i in range(50):
    plt.plot(timeToMaturity, simulatedYieldCurve[i], color="lightgray", alpha=0.5)
plt.plot(timeToMaturity, initialYieldCurve, color="blue", label="Initial Yield Curve", linewidth=2)
plt.plot(timeToMaturity, np.mean(simulatedYieldCurve, axis=0), color="red", label="Average Simulated Curve", linewidth=2)

# Chart format
plt.title("Monte Carlo Simulation of Yield Curve Shifts")
plt.xlabel("Time to Maturity (Years)")
plt.ylabel("Yield")
plt.legend()
plt.grid()
plt.show()
