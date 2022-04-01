import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";
import ItemGrid from "./ItemGrid";



const HomePage = () => {
        const defaultFilterState = [
            "Entertainment",
            "Fitness",
            "Medical",
            "Lifestyle",
        ];
        const [filter, setFilter] = useState([...defaultFilterState]);
        const [entChecked, setEntChecked] = useState(false);
        const [fitChecked, setFitChecked] = useState(false);
        const [medChecked, setMedChecked] = useState(false);
        const [lifeChecked, setLifeChecked] = useState(false);
        const [filter2, setFilter2] = useState([]);
        
        useEffect(() => {
            const checkedArray = [entChecked, fitChecked, lifeChecked, medChecked];
        
            checkedArray.every((box) => box === false)
            ? setFilter([...defaultFilterState])
            : setFilter([...filter2]);
        }, [entChecked, fitChecked, medChecked, lifeChecked]);
        
        const handleFilter = (e, categoryTarget, setCategoryTarget) => {
            const category = e.target.value;
            setCategoryTarget(!categoryTarget);
            if (categoryTarget === false) {
            if (!filter2.includes(category)) {
                setFilter2([...filter2, category]);
            } else {
                setFilter2([...filter]);
            }
            } else {
            const newF = filter2.filter((i) => i !== category);
            setFilter2([...newF]);
            }
        };
        return (
            <Wrapper>
            <Category>
                <h2>Category:</h2>
                <label>
                <input
                    type="checkbox"
                    name="category"
                    value="Entertainment"
                    onChange={(e) => handleFilter(e, entChecked, setEntChecked)}
                    checked={entChecked}
                />
                Entertainment
                </label>
                <label>
                <input
                    type="checkbox"
                    name="category"
                    value="Fitness"
                    onChange={(e) => handleFilter(e, fitChecked, setFitChecked)}
                    checked={fitChecked}
                />
                Fitness
                </label>
                <label>
                <input
                    type="checkbox"
                    name="category"
                    value="Lifestyle"
                    onChange={(e) => handleFilter(e, lifeChecked, setLifeChecked)}
                    checked={lifeChecked}
                />
                Lifestyle
                </label>
                <label>
                <input
                    type="checkbox"
                    name="category"
                    value="Medical"
                    onChange={(e) => handleFilter(e, medChecked, setMedChecked)}
                    checked={medChecked}
                />
                Medical
                </label>
            </Category>
            <ItemGridWrapper>
                <ItemGrid filter={filter} />
            </ItemGridWrapper>
            <FooterWrapper>
                <Footer />
            </FooterWrapper>
            </Wrapper>
        );
    };
    
const Wrapper = styled.div`
    display: grid;
    grid-template-areas:
            "header header header header header header "
            "sidebar  main main main main main"
            "footer footer footer footer footer footer";
    grid-template-columns: 300px auto;
    border-top: 1px solid black;
    //height: 100vh;
`;
    
const ItemGridWrapper = styled.main`
    grid-area: main;
    padding: 16px 20px;
`;
    
const FooterWrapper = styled.footer`
    grid-area: footer;
    padding: 16px 20px;
`;
const Category = styled.div`
    grid-area: sidebar;
    display: flex;
    flex-direction: column;
    label {
        font-size: 18px;
        padding: 5px;
    }
    h2 {
        color: red;
    }
`;

export default HomePage;