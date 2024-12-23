import numpy as np
import matplotlib.pyplot as plt

faceValue = 1000
couponRate = 0.075
yearsToMaturity = 15
yieldToMaturity = 0.065

annualCoupon = faceValue * couponRate
cashFlows = np.array([annualCoupon] * (yearsToMaturity - 1) + [annualCoupon + faceValue])
timePeriods = np.arange(1, yearsToMaturity + 1)

# Bond price
def calculateBondPrice(yieldRate):
    discountedCashFlows = cashFlows / (1 + yieldRate) ** timePeriods
    return np.sum(discountedCashFlows)

initialPrice = calculateBondPrice(yieldToMaturity)
print(f"Initial bond price: {initialPrice: .2f}")

# Macaulay duration
def calculateDuration(yieldRate):
    discounted_times = timePeriods * (cashFlows / (1 + yieldRate) ** timePeriods)
    bond_price = calculateBondPrice(yieldRate)
    return np.sum(discounted_times) / bond_price

duration = calculateDuration(yieldToMaturity)
print(f"Bond duration: {duration: .2f}")

# Convexity
def calculateConvexity(yieldRate):
    discounted_convexity = timePeriods * (timePeriods + 1) * (cashFlows / (1 + yieldRate) ** (timePeriods + 2))
    bond_price = calculateBondPrice(yieldRate)
    return np.sum(discounted_convexity) / bond_price

convexity = calculateConvexity(yieldToMaturity)
print(f"Convexity: {convexity: .2f}")

# Simulate bond prices under different interest rate scenarios
interestRateChanges = np.linspace(-0.03, 0.03, 100)  # Interest rate changes from -3% to +3%
priceChanges = []

for change in interestRateChanges:
    newYield = yieldToMaturity + change
    # Price approximation using duration and convexity
    price_change = -duration * change * initialPrice + 0.5 * convexity * (change ** 2) * initialPrice
    priceChanges.append(initialPrice + price_change)

# Visualization
plt.figure(figsize=(12, 6))
plt.plot(interestRateChanges * 100, priceChanges, label="Price Using Duration & Convexity", color="blue")
plt.axhline(y=initialPrice, color="red", linestyle="--", label="Initial Price")
plt.title("Bond Price Sensitivity to Interest Rate Changes")
plt.xlabel("Change in Interest Rate (%)")
plt.ylabel("Bond Price")
plt.legend()
plt.grid()
plt.show()
