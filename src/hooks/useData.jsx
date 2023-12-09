import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../firebase/firebase';

const useData = (selectedType, date, tranType) => {
    const [data, setData] = useState();
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const depend = {selectedType, date}
    useEffect(() => {
        getCategories();
      return () => {
      };
    }, depend ? [depend]: [])

    
    const getCategories = async () => {
        console.log("useData",selectedType);
        try {
            isLoading(true);
            const docRef = doc(
                db,
                selectedType === "Income"
                ? "IncomeCategories"
                : selectedType === "Expense"
                ? "ExpenseCategories": selectedType,
                "categories"
                );
                console.log("hit");
                const docSnap = await getDoc(docRef);
                console.log(docSnap.data());
          if (docSnap.exists()) {
            const cl = docSnap.data();
            const catList = Object.keys(cl).map((attribute) => cl[attribute]);
            setData(catList);
            console.log("hit3");
            console.log(catList);
            setIsLoading(false);
          }
        } catch (error) {
            setIsLoading(false);
          setError("Something went Wrong")
        }
        setIsLoading(false);
    };




  return {data, error, isLoading}
}

export default useData