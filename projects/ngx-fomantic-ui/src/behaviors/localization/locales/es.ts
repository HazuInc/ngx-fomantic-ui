import { IPartialLocaleValues } from "./interfaces/values";

/**
 * locale : Spanish (es)
 * author : Facundo Donato : https://github.com/genuinefafa
 */

const es: IPartialLocaleValues = {
  datepicker: {
    months: [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ],
    monthsShort: [
      "Ene",
      "Feb",
      "Mar",
      "Abr",
      "May",
      "Jun",
      "Jul",
      "Ago",
      "Sep",
      "Oct",
      "Nov",
      "Dic",
    ],
    weekdays: [
      "Domingo",
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado",
    ],
    weekdaysShort: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
    weekdaysNarrow: ["D", "L", "M", "M", "J", "V", "S"],
    formats: {
      time: "HH:mm",
      datetime: "d 'de' MMMM 'de' yyyy HH:mm",
      date: "d 'de' MMMM 'de' yyyy",
      month: "MMMM 'de' yyyy",
      year: "yyyy",
    },
    firstDayOfWeek: 1,
  },
  search: {
    placeholder: "Buscar...",
    noResults: {
      header: "Sin resultados",
      message: "La búsqueda no obtuvo resultados.",
    },
  },
  select: {
    noResultsMessage: "Sin resultados",
    single: {
      placeholder: "Seleccione uno",
    },
    multi: {
      placeholder: "Seleccione...",
      maxSelectedMessage: "Puede elegir hasta #{max}",
      selectedMessage: "Seleccionados #{count}",
    },
  },
};

export default es;
