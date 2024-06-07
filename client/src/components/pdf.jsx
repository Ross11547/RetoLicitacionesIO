import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// Estilos para el PDF
const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  section: {
    margin: 10,
    padding: 10,
  },
  table: {
    display: 'table',
    width: 'auto',
    margin: '10px',
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableCol: {
    width: '25%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#bfbfbf',
  },
  tableCellHeader: {
    margin: 'auto',
    marginTop: 5,
    fontSize: 12,
    fontWeight: 'bold',
  },
  tableCell: {
    margin: 'auto',
    marginTop: 5,
    fontSize: 10,
  },
});

const PdfDocument = ({ data }) => (
  <Document>
    <Page style={styles.page}>
      <View style={styles.section}>
        <Text style={{ fontSize: 20, textAlign: 'center' }}>Reporte de Proyectos</Text>
      </View>
      <View style={styles.table}>
        {/* Table Header */}
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCellHeader}>N</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCellHeader}>NOMBRE PROYECTO</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCellHeader}>ESTADO</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCellHeader}>DEPARTAMENTO</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCellHeader}>FECHA PUBLICACIÓN</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCellHeader}>FECHA CIERRE</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCellHeader}>TIPO CONTRATACIÓN</Text>
          </View>
        </View>
        {/* Table Data */}
        {data.map((v, i) => (
          <View key={i} style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{i + 1}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{v.nombre}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{v.estado}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{v.departamento}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{v.fechaPublicacion}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{v.fechaPresentacion}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{v.tipoContratacion}</Text>
            </View>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

export default PdfDocument;
