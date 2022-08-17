import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import Ajout from './components/Ajout';
import Listes from './components/Listes';
import Search from './components/Search';

const App = () => {

  const [id, setId] = useState(6);

  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("Low");

  const [delIds, setDelIds] = useState([]);

  const [tmp, setTmp] = useState(null);
  const [tmpT, setTmpT] = useState(null);

  const [taches, setTaches] = useState([
    { id: 1, libelle: 'Faire la modélisation', priorite: 'High' },
    { id: 2, libelle: 'Etablir le mérise', priorite: 'Medium' },
    { id: 3, libelle: 'Coder l’application', priorite: 'Low' },
    { id: 4, libelle: 'Installer les nodes', priorite: 'High' },
    { id: 5, libelle: 'Faire la 3D', priorite: 'Medium' },
  ])

  const recupId = (e) => {
    delIds.includes(e.target.value) ? removeId(e.target.value) : addId(e.target.value)
  }

  const recupIdTout = (e) => {

    taches.length === delIds.length ? setDelIds([]) : setDelIds(taches.map(t => t.id.toString()))
  }

  const addId = (d) => {
    setDelIds([...delIds, ...[d]])
  }

  const removeId = (d) => {
    setDelIds(delIds.map(id => id !== d ? id : null))
  }

  const supp = () => {
    setTaches(taches.map(tache => delIds.includes(tache.id.toString()) ? { id: tache.id, libelle: '', priorite: '' } : tache))
    setDelIds([]);
  }

  const recupT = (e) => {
    setInput1(e)
  }

  const recupP = (e) => {
    setInput2(e)
  }

  const add = () => {
    setTmpT(taches.map(tache => tache))

    setTmp([
      { id: id, libelle: input1, priorite: input2 }
    ])

    setId(id + 1)
  }



  useEffect(() => {
    tmp && setTaches([...tmpT, ...tmp])
  }, [tmp])

  return (
    <View>
      <Ajout funcA={add} funcT={recupT} funcP={recupP} t={input1} p={input2} />
      <Listes t={taches} funcR={recupId} funcTout={recupIdTout} del={supp} />
      <Search taches={taches} />
    </View>
  );
}
export default App