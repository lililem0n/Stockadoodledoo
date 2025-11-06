import streamlit as st
import pandas as pd
from datetime import datetime

st.set_page_config(page_title="Stockadoodledoo", layout="wide", page_icon="🚀")

# Initialize session state
if 'authenticated' not in st.session_state:
    st.session_state.authenticated = False
if 'watchlist' not in st.session_state:
    st.session_state.watchlist = []

# Password check
if not st.session_state.authenticated:
    st.markdown("<h1 style='text-align: center;'>🚀 Stockadoodledoo</h1>", unsafe_allow_html=True)
    st.markdown("<p style='text-align: center;'>Enter password to access</p>", unsafe_allow_html=True)
    
    password = st.text_input("Password", type="password", key="password_input")
    
    if st.button("Access Dashboard", use_container_width=True):
        if password == "Lulu8182":
            st.session_state.authenticated = True
            st.rerun()
        else:
            st.error("Incorrect password")
    st.stop()

# Main app
st.title("🚀 Stockadoodledoo")
st.subheader("Dual Scanner: Short Squeezes & Breakout Patterns")

# Tabs
tab1, tab2 = st.tabs(["🔥 Short Squeeze Scanner", "📈 Breakout Scanner"])

with tab1:
    st.info("Short squeeze candidates with high short interest, volume spikes, and social momentum")
    if st.button("🔍 Scan for Short Squeezes", key="scan_squeeze"):
        with st.spinner("Scanning market..."):
            # Demo data
            squeeze_stocks = pd.DataFrame([
                {
                    "Ticker": "BBAI",
                    "Company": "BigBear.ai Holdings",
                    "Price": "$0.87",
                    "Change": "+12.3%",
                    "Volume": "45M",
                    "RVOL": "4.2x",
                    "RSI": 68,
                    "Short %": "23.5%",
                    "Squeeze Prob": "78%",
                    "Risk": "Medium"
                },
                {
                    "Ticker": "SNDL",
                    "Company": "SNDL Inc.",
                    "Price": "$0.42",
                    "Change": "+15.6%",
                    "Volume": "78M",
                    "RVOL": "5.8x",
                    "RSI": 75,
                    "Short %": "28.3%",
                    "Squeeze Prob": "82%",
                    "Risk": "Medium"
                },
                {
                    "Ticker": "MARA",
                    "Company": "Marathon Digital",
                    "Price": "$1.23",
                    "Change": "+18.4%",
                    "Volume": "92M",
                    "RVOL": "6.2x",
                    "RSI": 72,
                    "Short %": "31.2%",
                    "Squeeze Prob": "85%",
                    "Risk": "High"
                }
            ])
            
            st.success(f"Found {len(squeeze_stocks)} short squeeze candidates!")
            st.dataframe(squeeze_stocks, use_container_width=True)
            
            st.markdown("### 🎯 Entry Strategy")
            st.warning("""
            **Wait for ALL conditions:**
            - ✅ Price breaks above resistance with volume surge (3-5x)
            - ✅ RSI reverses above 50
            - ✅ Short interest > 20% + Days to cover > 5
            - ⚠️ Use tight stop losses (12-15%)
            - 💰 Take profits quickly - these are volatile!
            """)

with tab2:
    st.info("Consolidation breakout patterns with proven historical success")
    if st.button("🔍 Scan for Breakouts", key="scan_breakout"):
        with st.spinner("Scanning market..."):
            # Demo data
            breakout_stocks = pd.DataFrame([
                {
                    "Ticker": "NVDA",
                    "Company": "NVIDIA Corporation",
                    "Price": "$4.23",
                    "Change": "+2.8%",
                    "Pattern": "Bull Flag",
                    "Prior Rally": "+45.2%",
                    "Consolidation": "12 days",
                    "Resistance": "$4.35",
                    "Breakout Prob": "85%",
                    "Risk": "Low"
                },
                {
                    "Ticker": "AMD",
                    "Company": "Advanced Micro Devices",
                    "Price": "$2.67",
                    "Change": "+3.4%",
                    "Pattern": "Bull Flag",
                    "Prior Rally": "+38.5%",
                    "Consolidation": "9 days",
                    "Resistance": "$2.75",
                    "Breakout Prob": "79%",
                    "Risk": "Low"
                },
                {
                    "Ticker": "TSLA",
                    "Company": "Tesla Inc.",
                    "Price": "$3.89",
                    "Change": "+2.4%",
                    "Pattern": "Ascending Triangle",
                    "Prior Rally": "+34.5%",
                    "Consolidation": "16 days",
                    "Resistance": "$4.00",
                    "Breakout Prob": "78%",
                    "Risk": "Medium"
                }
            ])
            
            st.success(f"Found {len(breakout_stocks)} breakout patterns!")
            st.dataframe(breakout_stocks, use_container_width=True)
            
            st.markdown("### 🎯 Entry Strategy")
            st.warning("""
            **⚠️ DO NOT BUY AT CURRENT PRICE!**
            
            **Wait for breakout confirmation:**
            - ✅ Price CLOSES above resistance level
            - ✅ Volume surges 2-3x average
            - ✅ Confirmed on daily chart
            - 💡 Enter higher but with confirmation
            - 🛑 Stop loss below consolidation support
            """)

# Sidebar
with st.sidebar:
    st.markdown("### ⭐ Watchlist")
    st.markdown(f"**{len(st.session_state.watchlist)} stocks tracked**")
    
    if st.session_state.watchlist:
        for stock in st.session_state.watchlist:
            st.markdown(f"- {stock}")
    else:
        st.info("No stocks in watchlist yet")
    
    st.markdown("---")
    st.markdown("### 🔧 Settings")
    st.markdown(f"**Scan Time:** {datetime.now().strftime('%I:%M %p')}")
    
    if st.button("🚪 Logout"):
        st.session_state.authenticated = False
        st.rerun()

st.markdown("---")
st.caption("⚠️ For educational purposes only. Always do your own research before investing.")
